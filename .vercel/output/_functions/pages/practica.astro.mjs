import { c as createComponent, b as renderHead, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_BHBAp1yF.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { S as Sidebar } from '../chunks/Sidebar_bVGyBsaW.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

function EjercicioPrompt({ ejercicio, instrucciones }) {
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
          prompt: `Ejercicio: ${ejercicio}
Instrucciones: ${instrucciones}
Prompt del usuario: ${input}

Evalúa el prompt del usuario según las instrucciones y da feedback claro, breve y constructivo. Si es correcto, di por qué; si no, explica qué le falta o cómo mejorarlo.`
        })
      });
      const data = await res.json();
      setFeedback(data.result);
    } catch (err) {
      setFeedback("Error al conectar con la IA.");
    }
    setLoading(false);
  }
  return /* @__PURE__ */ jsxs("div", { className: "bg-white p-0 max-w-2xl mx-auto my-0", children: [
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx(
        "textarea",
        {
          className: "border border-gray-200 rounded px-4 py-2 text-lg focus:outline-none focus:border-yellow-400 bg-gray-50 min-h-[90px] resize-y",
          placeholder: "Escribe tu prompt aquí...",
          value: input,
          onChange: (e) => setInput(e.target.value),
          required: true
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "bg-black text-white px-6 py-2 rounded font-semibold hover:bg-yellow-400 hover:text-black transition disabled:opacity-50 uppercase tracking-wide font-space",
          disabled: loading,
          children: loading ? "Analizando..." : "Enviar y obtener feedback"
        }
      )
    ] }),
    feedback && /* @__PURE__ */ jsxs("div", { className: "mt-6 p-6 bg-gray-50 border-l-4 border-yellow-300 text-gray-900 whitespace-pre-line", children: [
      /* @__PURE__ */ jsx("span", { className: "font-bold text-yellow-600 not-italic mb-1 block", children: "Feedback IA:" }),
      /* @__PURE__ */ jsx("div", { children: feedback })
    ] })
  ] });
}

const $$Practica = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Práctica IA | Taller ChatGPT</title><meta name="description" content="Pon a prueba tus prompts y experimenta con la IA en tiempo real."><link rel="icon" href="/favicon.svg">${renderHead()}</head> <body class="flex min-h-screen text-gray-900 bg-white font-sans"> ${renderComponent($$result, "Sidebar", Sidebar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/componentes/Sidebar.jsx", "client:component-export": "default" })} <main class="flex-1 flex flex-col items-center justify-center p-6 md:p-16"> <div class="w-full max-w-5xl bg-white overflow-hidden"> <div class="px-8 py-10 md:py-14 bg-white"> <h1 class="text-5xl md:text-6xl font-space font-bold mb-10 mt-0 uppercase tracking-tight bg-gradient-to-r from-cyan-700 via-fuchsia-600 to-yellow-400 bg-clip-text text-transparent">Ejercicios prácticos</h1> <h2 class="text-2xl font-space text-black mb-8 mt-2 uppercase tracking-tight">Pon en práctica lo aprendido</h2> <ul class="text-lg text-gray-900 mb-12 text-left max-w-xl ml-4 md:ml-8"> <li class="mb-10"> <h3 class="text-xl font-space font-bold mb-2 text-gray-900">Anatomía completa de un buen prompt</h3> <p class="text-base text-gray-600 mb-4">Redacta un prompt para pedirle a ChatGPT que explique la estructura de un prompt efectivo. <span class="font-semibold text-fuchsia-700">Tu prompt debe incluir todos los elementos de la anatomía de un buen prompt:</span> una instrucción clara, el output esperado, el objetivo, el contexto y las restricciones.</p> <div class="bg-gray-50 outline outline-1 outline-gray-200 p-8 mb-2"> ${renderComponent($$result, "EjercicioPrompt", EjercicioPrompt, { "client:load": true, "ejercicio": "Redacta un prompt para pedirle a ChatGPT que explique la estructura de un prompt efectivo.", "instrucciones": "Incluye en tu prompt: instrucci\xF3n clara, output esperado, objetivo, contexto y restricciones.", "client:component-hydration": "load", "client:component-path": "C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/componentes/EjercicioPrompt.jsx", "client:component-export": "default" })} </div> </li> <li class="mb-10"> <h3 class="text-xl font-space font-bold mb-2 text-gray-900">Comparación de campañas de redes sociales</h3> <p class="text-base text-gray-600 mb-4">Redacta un prompt para pedirle a ChatGPT que compare dos campañas de redes sociales. <span class="font-semibold text-fuchsia-700">Tu prompt debe incluir todos los elementos de la anatomía de un buen prompt:</span> una instrucción clara, el output esperado, el objetivo, el contexto y las restricciones.</p> <div class="bg-gray-50 outline outline-1 outline-gray-200 p-8 mb-2"> ${renderComponent($$result, "EjercicioPrompt", EjercicioPrompt, { "client:load": true, "ejercicio": "Redacta un prompt para pedirle a ChatGPT que compare dos campa\xF1as de redes sociales.", "instrucciones": "Incluye en tu prompt: instrucci\xF3n clara, output esperado, objetivo, contexto y restricciones.", "client:component-hydration": "load", "client:component-path": "C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/componentes/EjercicioPrompt.jsx", "client:component-export": "default" })} </div> </li> <li class="mb-10"> <h3 class="text-xl font-space font-bold mb-2 text-gray-900">Sugerencias para mejorar el tono de voz de una marca</h3> <p class="text-base text-gray-600 mb-4">Redacta un prompt para pedirle a ChatGPT que sugiera mejoras para el tono de voz de una marca. <span class="font-semibold text-fuchsia-700">Tu prompt debe incluir todos los elementos de la anatomía de un buen prompt:</span> una instrucción clara, el output esperado, el objetivo, el contexto y las restricciones.</p> <div class="bg-gray-50 outline outline-1 outline-gray-200 p-8 mb-2"> ${renderComponent($$result, "EjercicioPrompt", EjercicioPrompt, { "client:load": true, "ejercicio": "Redacta un prompt para pedirle a ChatGPT que sugiera mejoras para el tono de voz de una marca.", "instrucciones": "Incluye en tu prompt: instrucci\xF3n clara, output esperado, objetivo, contexto y restricciones.", "client:component-hydration": "load", "client:component-path": "C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/componentes/EjercicioPrompt.jsx", "client:component-export": "default" })} </div> </li> <li class="mb-10"> <h3 class="text-xl font-space font-bold mb-2 text-gray-900">Ideas creativas para lanzamiento de producto</h3> <p class="text-base text-gray-600 mb-4">Redacta un prompt para pedirle a ChatGPT que genere ideas creativas para el lanzamiento de un producto. <span class="font-semibold text-fuchsia-700">Tu prompt debe incluir todos los elementos de la anatomía de un buen prompt:</span> una instrucción clara, el output esperado, el objetivo, el contexto y las restricciones.</p> <div class="bg-gray-50 outline outline-1 outline-gray-200 p-8 mb-2"> ${renderComponent($$result, "EjercicioPrompt", EjercicioPrompt, { "client:load": true, "ejercicio": "Redacta un prompt para pedirle a ChatGPT que genere ideas creativas para el lanzamiento de un producto.", "instrucciones": "Incluye en tu prompt: instrucci\xF3n clara, output esperado, objetivo, contexto y restricciones.", "client:component-hydration": "load", "client:component-path": "C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/componentes/EjercicioPrompt.jsx", "client:component-export": "default" })} </div> </li> <li class="mb-10"> <h3 class="text-xl font-space font-bold mb-2 text-gray-900">Explicación de los límites de la IA</h3> <p class="text-base text-gray-600 mb-4">Redacta un prompt para pedirle a ChatGPT que explique los límites de la inteligencia artificial en la generación de contenido. <span class="font-semibold text-fuchsia-700">Tu prompt debe incluir todos los elementos de la anatomía de un buen prompt:</span> una instrucción clara, el output esperado, el objetivo, el contexto y las restricciones.</p> <div class="bg-gray-50 outline outline-1 outline-gray-200 p-8 mb-2"> ${renderComponent($$result, "EjercicioPrompt", EjercicioPrompt, { "client:load": true, "ejercicio": "Redacta un prompt para pedirle a ChatGPT que explique los l\xEDmites de la inteligencia artificial en la generaci\xF3n de contenido.", "instrucciones": "Incluye en tu prompt: instrucci\xF3n clara, output esperado, objetivo, contexto y restricciones.", "client:component-hydration": "load", "client:component-path": "C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/componentes/EjercicioPrompt.jsx", "client:component-export": "default" })} </div> </li> </ul> </div> </div> </main> </body></html>`;
}, "C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/pages/practica.astro", void 0);

const $$file = "C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/pages/practica.astro";
const $$url = "/practica";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Practica,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
