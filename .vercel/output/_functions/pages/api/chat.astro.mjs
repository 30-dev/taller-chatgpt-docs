import fetch from 'node-fetch';
export { renderers } from '../../renderers.mjs';

const prerender = false;
async function POST({ request }) {
  let prompt = "";
  try {
    const body = await request.json();
    console.log("BODY RECIBIDO:", body);
    prompt = body.prompt;
  } catch (e) {
    return new Response(JSON.stringify({ error: "No se recibió un prompt válido." }), { status: 400 });
  }
  if (!prompt || typeof prompt !== "string") {
    return new Response(JSON.stringify({ error: "Prompt vacío o inválido." }), { status: 400 });
  }
  const apiKey = "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";
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Eres un asistente de práctica para prompts de ChatGPT." },
        { role: "user", content: prompt }
      ],
      max_tokens: 256
    })
  });
  const data = await response.json();
  if (data.error) {
    return new Response(JSON.stringify({ result: `Error OpenAI: ${data.error.message}` }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify({ result: data.choices?.[0]?.message?.content || "Sin respuesta." }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
