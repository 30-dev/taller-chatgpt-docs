import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

function Sidebar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "INTRODUCCIÓN" },
    { href: "/comunicacion", label: "COMUNICACIÓN Y PENSAMIENTO CRÍTICO" },
    { href: "/que-es-chatgpt", label: "¿QUÉ ES CHATGPT?" },
    { href: "/modelos", label: "MODELOS DE CHATGPT" },
    { href: "/fundamentos-prompt", label: "FUNDAMENTOS Y ANATOMÍA DEL PROMPT" },
    { href: "/organizacion", label: "ORGANIZACIÓN DE PROYECTOS" },
    { href: "/tecnicas-avanzadas", label: "TÉCNICAS AVANZADAS DE PROMPTING" },
    { href: "/funciones-limites", label: "FUNCIONES Y LÍMITES DE CHATGPT" },
    { href: "/hacks", label: "HACKS Y TRUCOS DE PROMPTING" },
    { href: "/practica", label: "PRÁCTICA IA" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-lg border-2 border-black",
        onClick: () => setOpen(true),
        "aria-label": "Abrir menú",
        children: /* @__PURE__ */ jsx("svg", { className: "w-7 h-7 text-black", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16M4 18h16" }) })
      }
    ),
    /* @__PURE__ */ jsx("aside", { className: "w-72 bg-white p-0 hidden md:flex flex-col items-start justify-start sticky top-0 h-screen overflow-y-auto shadow-lg z-10 border-r border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start w-full py-12 px-8", children: [
      /* @__PURE__ */ jsx("img", { src: "/WE_Collab.svg", alt: "Logo We Are", className: "w-56 h-16 mb-6" }),
      /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-2 w-full items-start", children: links.map(({ href, label }) => /* @__PURE__ */ jsx(
        "a",
        {
          href,
          className: "block text-black text-base font-medium px-2 py-2 uppercase font-space rounded transition-all duration-200 hover:bg-black hover:text-white",
          children: label
        },
        href
      )) })
    ] }) }),
    open && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50 flex", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-black/40 w-full h-full", onClick: () => setOpen(false) }),
      /* @__PURE__ */ jsxs("aside", { className: "w-72 bg-white h-full flex flex-col items-start justify-center shadow-2xl z-50 animate-slideInLeft fixed left-0 top-0 px-8 border-r border-gray-200", children: [
        /* @__PURE__ */ jsx("button", { className: "absolute top-4 right-4 text-3xl text-black hover:text-white bg-black/10 hover:bg-black transition rounded-full w-10 h-10 flex items-center justify-center", onClick: () => setOpen(false), "aria-label": "Cerrar menú", children: "×" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start w-full py-12", children: [
          /* @__PURE__ */ jsx("img", { src: "/WE_Collab.svg", alt: "Logo We Are", className: "w-16 h-16 mb-6" }),
          /* @__PURE__ */ jsx("h1", { className: "text-2xl mb-10 tracking-tight text-black uppercase text-left font-space", children: "TALLER CHATGPT" }),
          /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-2 w-full items-start", children: links.map(({ href, label }) => /* @__PURE__ */ jsx(
            "a",
            {
              href,
              className: "block text-black text-base font-medium px-2 py-2 uppercase font-space rounded transition-all duration-200 hover:bg-black hover:text-white",
              onClick: () => setOpen(false),
              children: label
            },
            href
          )) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.3s cubic-bezier(0.4,0,0.2,1) both;
        }
      ` })
  ] });
}

export { Sidebar as S };
