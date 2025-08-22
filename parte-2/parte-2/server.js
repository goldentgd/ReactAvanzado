import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

// Permitir CORS solo desde tu frontend
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.post("/api/generate", async (req, res) => {
  console.log("Recibido del frontend:", req.body);

  try {
    const { model, prompt } = req.body;

    if (!model || !prompt) {
      return res.status(400).json({ error: "Falta model o prompt" });
    }

    const response = await fetch("http://127.0.0.1:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model, prompt }),
    });

    const text = await response.text();
    const lines = text.split("\n").filter(Boolean);

    let finalResponse = "";
    for (const line of lines) {
      try {
        const obj = JSON.parse(line);
        if (obj.response) finalResponse += obj.response;
      } catch {
        console.warn("No se pudo parsear línea (omitida):", line);
      }
    }

    finalResponse = finalResponse.replace(/<think>/g, "")
                                 .replace(/<\/think>/g, "")
                                 .trim();

    const linesFinal = finalResponse.split("\n").filter(line => line.trim() !== "");
    finalResponse = linesFinal[linesFinal.length - 1] || "";

    console.log("Respuesta final limpia de Ollama:", finalResponse);
    res.json({ response: finalResponse });

  } catch (error) {
    console.error("Error interno en el proxy:", error.message);
    res.status(500).json({ error: "Error interno en el proxy" });
  }
});

app.listen(3001, () => console.log("Proxy listening on port 3001"));
