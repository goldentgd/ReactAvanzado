import { useState } from "react";
import { useOllama } from "../api/useOllamaHook";
import { useOllamaContext } from "./Context";
import History from "../History";

export default function ChatBox() {
  const [prompt, setPrompt] = useState("");
  const { sendPrompt, loading } = useOllama();
  const { state, dispatch } = useOllamaContext();

  const handleSend = async () => {
    if (!prompt.trim()) return;
    const res = await sendPrompt(prompt);
    dispatch({ type: "ADD_HISTORY", payload: { prompt, response: res } });
    setPrompt("");
  };

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">💬 Chat con Ollama</h1>

      {/* Historial */}
      <div className="flex-1 overflow-y-auto mb-4 border rounded-lg p-3 bg-gray-50">
        <History history={state.history} />
      </div>

      {/* Input */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Escribe tu prompt..."
          className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-600 transition disabled:bg-gray-400"
        >
          {loading ? "Cargando..." : "Enviar"}
        </button>
      </div>
    </div>
  );
}
