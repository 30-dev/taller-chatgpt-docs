import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BuIByWbQ.mjs';
import { manifest } from './manifest_TOSsrhGF.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/chat.astro.mjs');
const _page2 = () => import('./pages/comunicacion.astro.mjs');
const _page3 = () => import('./pages/funciones-limites.astro.mjs');
const _page4 = () => import('./pages/fundamentos-prompt.astro.mjs');
const _page5 = () => import('./pages/hacks.astro.mjs');
const _page6 = () => import('./pages/modelos.astro.mjs');
const _page7 = () => import('./pages/organizacion.astro.mjs');
const _page8 = () => import('./pages/practica.astro.mjs');
const _page9 = () => import('./pages/presentacion.astro.mjs');
const _page10 = () => import('./pages/que-es-chatgpt.astro.mjs');
const _page11 = () => import('./pages/tecnicas-avanzadas.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/chat.js", _page1],
    ["src/pages/comunicacion.md", _page2],
    ["src/pages/funciones-limites.md", _page3],
    ["src/pages/fundamentos-prompt.md", _page4],
    ["src/pages/hacks.astro", _page5],
    ["src/pages/modelos.md", _page6],
    ["src/pages/organizacion.md", _page7],
    ["src/pages/practica.astro", _page8],
    ["src/pages/presentacion.md", _page9],
    ["src/pages/que-es-chatgpt.md", _page10],
    ["src/pages/tecnicas-avanzadas.md", _page11],
    ["src/pages/index.md", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "19955782-e032-4135-8c96-e96f131f6100",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
