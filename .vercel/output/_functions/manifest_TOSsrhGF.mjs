import 'kleur/colors';
import { f as decodeKey } from './chunks/astro/server_BHBAp1yF.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CE_SLph9.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/User/Documents/GitHub/taller-chatgpt-docs/","cacheDir":"file:///C:/Users/User/Documents/GitHub/taller-chatgpt-docs/node_modules/.astro/","outDir":"file:///C:/Users/User/Documents/GitHub/taller-chatgpt-docs/dist/","srcDir":"file:///C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/","publicDir":"file:///C:/Users/User/Documents/GitHub/taller-chatgpt-docs/public/","buildClientDir":"file:///C:/Users/User/Documents/GitHub/taller-chatgpt-docs/dist/client/","buildServerDir":"file:///C:/Users/User/Documents/GitHub/taller-chatgpt-docs/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/chat","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/chat\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"chat","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/chat.js","pathname":"/api/chat","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/comunicacion.D4tBgaGg.css"}],"routeData":{"route":"/comunicacion","isIndex":false,"type":"page","pattern":"^\\/comunicacion\\/?$","segments":[[{"content":"comunicacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/comunicacion.md","pathname":"/comunicacion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/comunicacion.D4tBgaGg.css"}],"routeData":{"route":"/funciones-limites","isIndex":false,"type":"page","pattern":"^\\/funciones-limites\\/?$","segments":[[{"content":"funciones-limites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/funciones-limites.md","pathname":"/funciones-limites","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/comunicacion.D4tBgaGg.css"}],"routeData":{"route":"/fundamentos-prompt","isIndex":false,"type":"page","pattern":"^\\/fundamentos-prompt\\/?$","segments":[[{"content":"fundamentos-prompt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fundamentos-prompt.md","pathname":"/fundamentos-prompt","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/comunicacion.D4tBgaGg.css"}],"routeData":{"route":"/hacks","isIndex":false,"type":"page","pattern":"^\\/hacks\\/?$","segments":[[{"content":"hacks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hacks.astro","pathname":"/hacks","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/comunicacion.D4tBgaGg.css"}],"routeData":{"route":"/modelos","isIndex":false,"type":"page","pattern":"^\\/modelos\\/?$","segments":[[{"content":"modelos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/modelos.md","pathname":"/modelos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/comunicacion.D4tBgaGg.css"}],"routeData":{"route":"/organizacion","isIndex":false,"type":"page","pattern":"^\\/organizacion\\/?$","segments":[[{"content":"organizacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/organizacion.md","pathname":"/organizacion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/comunicacion.D4tBgaGg.css"}],"routeData":{"route":"/practica","isIndex":false,"type":"page","pattern":"^\\/practica\\/?$","segments":[[{"content":"practica","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/practica.astro","pathname":"/practica","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/comunicacion.D4tBgaGg.css"}],"routeData":{"route":"/presentacion","isIndex":false,"type":"page","pattern":"^\\/presentacion\\/?$","segments":[[{"content":"presentacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/presentacion.md","pathname":"/presentacion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/comunicacion.D4tBgaGg.css"}],"routeData":{"route":"/que-es-chatgpt","isIndex":false,"type":"page","pattern":"^\\/que-es-chatgpt\\/?$","segments":[[{"content":"que-es-chatgpt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/que-es-chatgpt.md","pathname":"/que-es-chatgpt","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/comunicacion.D4tBgaGg.css"}],"routeData":{"route":"/tecnicas-avanzadas","isIndex":false,"type":"page","pattern":"^\\/tecnicas-avanzadas\\/?$","segments":[[{"content":"tecnicas-avanzadas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tecnicas-avanzadas.md","pathname":"/tecnicas-avanzadas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/comunicacion.D4tBgaGg.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.md","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/pages/hacks.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/pages/practica.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/pages/comunicacion.md",{"propagation":"none","containsHead":true}],["C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/pages/funciones-limites.md",{"propagation":"none","containsHead":true}],["C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/pages/fundamentos-prompt.md",{"propagation":"none","containsHead":true}],["C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/pages/index.md",{"propagation":"none","containsHead":true}],["C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/pages/modelos.md",{"propagation":"none","containsHead":true}],["C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/pages/organizacion.md",{"propagation":"none","containsHead":true}],["C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/pages/presentacion.md",{"propagation":"none","containsHead":true}],["C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/pages/que-es-chatgpt.md",{"propagation":"none","containsHead":true}],["C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/pages/tecnicas-avanzadas.md",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/chat@_@js":"pages/api/chat.astro.mjs","\u0000@astro-page:src/pages/comunicacion@_@md":"pages/comunicacion.astro.mjs","\u0000@astro-page:src/pages/funciones-limites@_@md":"pages/funciones-limites.astro.mjs","\u0000@astro-page:src/pages/fundamentos-prompt@_@md":"pages/fundamentos-prompt.astro.mjs","\u0000@astro-page:src/pages/hacks@_@astro":"pages/hacks.astro.mjs","\u0000@astro-page:src/pages/modelos@_@md":"pages/modelos.astro.mjs","\u0000@astro-page:src/pages/organizacion@_@md":"pages/organizacion.astro.mjs","\u0000@astro-page:src/pages/presentacion@_@md":"pages/presentacion.astro.mjs","\u0000@astro-page:src/pages/que-es-chatgpt@_@md":"pages/que-es-chatgpt.astro.mjs","\u0000@astro-page:src/pages/tecnicas-avanzadas@_@md":"pages/tecnicas-avanzadas.astro.mjs","\u0000@astro-page:src/pages/index@_@md":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/practica@_@astro":"pages/practica.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/User/Documents/GitHub/taller-chatgpt-docs/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BxmoTUqX.mjs","\u0000@astrojs-manifest":"manifest_TOSsrhGF.mjs","C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/componentes/Sidebar.jsx":"_astro/Sidebar.rgxWMVAi.js","C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/componentes/EjercicioPrompt.jsx":"_astro/EjercicioPrompt.C5pEfFyF.js","C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/componentes/ModalPresentacionWrapper.jsx":"_astro/ModalPresentacionWrapper.DpsrUGFe.js","@astrojs/react/client.js":"_astro/client.BPIbHqJh.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/comunicacion.D4tBgaGg.css","/favicon.svg","/WE_Collab.svg","/_astro/client.BPIbHqJh.js","/_astro/EjercicioPrompt.C5pEfFyF.js","/_astro/index.BVOCwoKb.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/ModalPresentacionWrapper.DpsrUGFe.js","/_astro/Sidebar.rgxWMVAi.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"PLRypAT/jL+/HKPHkEvpKfqPN+6mt1i8Jy0gFbN9zag="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
