import React, { useState } from "react";

export default function EjercicioPrompt({ ejercicio, instrucciones }) {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (input.trim().length < 20) {
      setFeedback("Tu prompt es demasiado corto. Por favor, elabora una respuesta más detallada siguiendo las instrucciones.");
      return;
    }

    setLoading(true);
    setFeedback("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Eres un evaluador experto de prompts para IA, muy estricto y detallista. Tu tarea es analizar el siguiente prompt de un usuario y darle feedback para mejorarlo.

**Ejercicio:**
${ejercicio}

**Instrucciones del ejercicio:**
${instrucciones}

**Prompt del usuario:**
${input}

---

**Tus instrucciones de evaluación:**
1.  **Sé muy riguroso.** No aceptes el prompt como "correcto" a menos que cumpla con CADA una de las instrucciones del ejercicio.
2.  **Sintetiza tu feedback.** Proporciona tu análisis en un único párrafo conciso.
3.  **No uses formato Markdown.** Escribe tu respuesta en texto plano. No uses asteriscos, guiones ni ningún otro elemento de formato.
4.  **Sé directo y accionable.** Empieza señalando los puntos a mejorar y luego los puntos positivos, todo en el mismo párrafo.
5.  **No incluyas títulos ni introducciones.** Tu respuesta debe empezar directamente con el feedback, sin frases como "Aquí está tu feedback:" o similares.

Ahora, proporciona tu feedback detallado y estricto en un solo párrafo de texto plano, comenzando directamente con el análisis.`
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
        <div className="mt-6 p-6 bg-gray-50 border-l-4 border-yellow-300 text-gray-900 whitespace-pre-line overflow-y-auto max-h-72">
          <span className="font-bold text-yellow-600 not-italic mb-1 block">Feedback IA:</span>
          <div>{feedback}</div>
        </div>
      )}
    </div>
  );
}
