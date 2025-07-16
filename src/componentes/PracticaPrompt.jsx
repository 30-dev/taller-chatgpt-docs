import React, { useState } from "react";

export default function PracticaPrompt() {
  const [input, setInput] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [loading, setLoading] = useState(false);
  const placeholder = "Escribe tu prompt aquí...";

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setRespuesta("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input })
      });
      const data = await res.json();
      setRespuesta(data.result);
    } catch (err) {
      setRespuesta("Error al conectar con la IA.");
    }
    setLoading(false);
  }

  return (
    <div className="bg-white border border-blue-100 rounded-xl shadow p-6 max-w-xl mx-auto my-8">
      <h2 className="text-xl font-bold mb-2 text-blue-700">Prueba tu prompt con ChatGPT</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border rounded px-4 py-2 text-lg"
          placeholder={placeholder}
          value={input}
          onChange={e => setInput(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Consultando..." : "Enviar a ChatGPT"}
        </button>
      </form>
      {respuesta && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded text-gray-900 whitespace-pre-line">
          <b>Respuesta IA:</b>
          <div>{respuesta}</div>
        </div>
      )}
    </div>
  );
}
