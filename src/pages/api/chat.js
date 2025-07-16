export const prerender = false;
import fetch from 'node-fetch';

export async function POST({ request }) {
  let prompt = "";
  try {
    const body = await request.json();
    console.log("BODY RECIBIDO:", body); // Log para depuración
    prompt = body.prompt;
  } catch (e) {
    return new Response(JSON.stringify({ error: 'No se recibió un prompt válido.' }), { status: 400 });
  }

  if (!prompt || typeof prompt !== "string") {
    return new Response(JSON.stringify({ error: 'Prompt vacío o inválido.' }), { status: 400 });
  }

  const apiKey = import.meta.env.OPENAI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'No API key configured.' }), { status: 500 });
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Eres un asistente de práctica para prompts de ChatGPT.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 256
    })
  });

  const data = await response.json();
  if (data.error) {
    return new Response(JSON.stringify({ result: `Error OpenAI: ${data.error.message}` }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  return new Response(JSON.stringify({ result: data.choices?.[0]?.message?.content || 'Sin respuesta.' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
