import React, { useState } from "react";

export default function EjercicioPrompt({ ejercicio, instrucciones }) {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setFeedback("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Ejercicio: ${ejercicio}\nInstrucciones: ${instrucciones}\nPrompt del usuario: ${input}\n\nEvalúa el prompt del usuario según las instrucciones y da feedback claro, breve y constructivo. Si es correcto, di por qué; si no, explica qué le falta o cómo mejorarlo.`
        })
      });
      const data = await res.json();
      setFeedback(data.result);
    } catch (err) {
      setFeedback("Error al conectar con la IA.");
    }
    setLoading(false);
  }

  return (
    <div className="bg-white p-0 max-w-2xl mx-auto my-0">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          className="border border-gray-200 rounded px-4 py-2 text-lg focus:outline-none focus:border-yellow-400 bg-gray-50 min-h-[90px] resize-y"
          placeholder="Escribe tu prompt aquí..."
          value={input}
          onChange={e => setInput(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded font-semibold hover:bg-yellow-400 hover:text-black transition disabled:opacity-50 uppercase tracking-wide font-space"
          disabled={loading}
        >
          {loading ? "Analizando..." : "Enviar y obtener feedback"}
        </button>
      </form>
      {feedback && (
        <div className="mt-6 p-6 bg-gray-50 border-l-4 border-yellow-300 text-gray-900 whitespace-pre-line">
          <span className="font-bold text-yellow-600 not-italic mb-1 block">Feedback IA:</span>
          <div>{feedback}</div>
        </div>
      )}
    </div>
  );
}
