import { useState } from "react";

export function useOllama(model = "deepseek-r1:1.5b") {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const sendPrompt = async (prompt) => {
    if (!prompt.trim()) return;

    // Forzar español
    const spanishPrompt = `Responde en español: ${prompt}`;

    try {
      setLoading(true);
      setError(null);

      const res = await fetch("http://localhost:3001/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model, prompt: spanishPrompt }),
      });

      if (!res.ok) throw new Error("Error en la petición al proxy");

      const data = await res.json();
      setResponse(data.response);
      return data.response;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, response, error, sendPrompt };
}
