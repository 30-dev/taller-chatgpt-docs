import { c as createComponent, d as createAstro, b as renderHead, r as renderComponent, e as renderSlot, a as renderTemplate } from './astro/server_BHBAp1yF.mjs';
import 'kleur/colors';
import { S as Sidebar } from './Sidebar_bVGyBsaW.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                                */

function ModalPresentacion({ pasos, onClose }) {
  const [pasoActual, setPasoActual] = useState(0);
  const paso = pasos[pasoActual];
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/70 z-50 flex items-center justify-center font-space", children: /* @__PURE__ */ jsxs("div", { className: "bg-black rounded-2xl shadow-2xl max-w-2xl w-full p-0 relative border-4 border-white", children: [
    /* @__PURE__ */ jsx("button", { className: "absolute top-4 right-4 text-2xl text-white hover:text-black bg-white/10 hover:bg-white transition rounded-full w-10 h-10 flex items-center justify-center font-space", onClick: onClose, children: "×" }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4 text-sm text-white px-8 pt-8 font-space", children: [
      "Paso ",
      pasoActual + 1,
      " de ",
      pasos.length
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "px-8 pb-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-extrabold mb-2 text-white uppercase tracking-tight font-space", children: paso.titulo }),
      /* @__PURE__ */ jsx("p", { className: "text-white leading-relaxed text-lg font-space", dangerouslySetInnerHTML: { __html: paso.contenido } }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-8", children: [
        /* @__PURE__ */ jsx("button", { className: "text-base px-6 py-2 bg-white border-2 border-black text-black font-bold rounded-full shadow hover:bg-black hover:text-white transition disabled:opacity-50 font-space", onClick: () => setPasoActual((p) => Math.max(0, p - 1)), disabled: pasoActual === 0, children: "Anterior" }),
        /* @__PURE__ */ jsx("button", { className: "text-base px-6 py-2 bg-black text-white font-bold rounded-full shadow hover:bg-white hover:text-black border-2 border-white transition disabled:opacity-50 font-space", onClick: () => setPasoActual((p) => Math.min(pasos.length - 1, p + 1)), disabled: pasoActual === pasos.length - 1, children: "Siguiente" })
      ] })
    ] })
  ] }) });
}

function ModalPresentacionWrapper({ pasos }) {
  const [mostrar, setMostrar] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { className: "fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded shadow-lg z-40", onClick: () => setMostrar(true), children: "Ver presentación interactiva" }),
    mostrar && /* @__PURE__ */ jsx(ModalPresentacion, { pasos, onClose: () => setMostrar(false) })
  ] });
}

const $$Astro = createAstro();
const $$PresentacionLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PresentacionLayout;
  const { title } = Astro2.props;
  const pasos = [
    { titulo: "Bienvenida", contenido: "<b>\xA1Hola!</b> Este es el inicio del taller." },
    { titulo: "Objetivo", contenido: "Aprender\xE1s a usar ChatGPT de forma efectiva." },
    { titulo: "\xA1Comencemos!", contenido: "Haz clic en siguiente para empezar." }
  ];
  return renderTemplate`<html lang="es"> <head><title>${title}</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/WE_Collab.svg">${renderHead()}</head> <body class="flex min-h-screen text-gray-900 bg-white font-sans"> ${renderComponent($$result, "Sidebar", Sidebar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/componentes/Sidebar.jsx", "client:component-export": "default" })} <main class="flex-1 p-6 md:px-16 prose max-w-none bg-white min-h-screen"> ${renderComponent($$result, "ModalPresentacionWrapper", ModalPresentacionWrapper, { "client:load": true, "pasos": pasos, "client:component-hydration": "load", "client:component-path": "C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/componentes/ModalPresentacionWrapper.jsx", "client:component-export": "default" })} <div class="max-w-3xl mx-auto px-4 md:px-0 mt-12"> ${renderSlot($$result, $$slots["default"])} </div> </main> </body></html>`;
}, "C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/layouts/PresentacionLayout.astro", void 0);

export { $$PresentacionLayout as $ };
