import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_BHBAp1yF.mjs';
import 'kleur/colors';
import { $ as $$PresentacionLayout } from '../chunks/PresentacionLayout_BxDVcK9F.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<div class=\"max-w-4xl mx-auto px-4 md:px-0 mt-12 p-2 md:p-12\">\n  <div class=\"mb-8\">\n    <span class=\"inline-block text-black font-space font-bold text-xl md:text-2xl py-2 uppercase tracking-wide\">Bienvenido</span>\n  </div>\n  <h1 class=\"text-5xl md:text-6xl font-space font-bold mb-6 uppercase tracking-tight bg-gradient-to-r from-yellow-500 via-fuchsia-600 to-cyan-700 bg-clip-text text-transparent\">Creatividad Potenciada con ChatGPT</h1>\n  <h2 class=\"text-3xl font-space text-black mb-8 uppercase tracking-tight\">Mini Curso para Creativos y Community Managers</h2>\n  <p class=\"text-xl font-inter text-gray-700 mb-8 max-w-2xl\">Bienvenido a este mini curso diseñado para creativos y community managers, donde se profundizará sobre cómo aprovechar ChatGPT como una herramienta de inspiración, productividad y generación de ideas.</p>\n  <ul class=\"list-disc list-inside text-lg text-gray-800 mb-8 text-left max-w-xl\">\n    <li>Descubre cómo crear prompts efectivos para obtener resultados sorprendentes.</li>\n    <li>Aprende técnicas para brainstorming, redacción y automatización de tareas creativas.</li>\n    <li>Explora casos reales y ejercicios prácticos para potenciar tu día a día profesional.</li>\n  </ul>\n  <p class=\"text-lg text-gray-500\">¡Comienza a explorar y lleva tu creatividad al siguiente nivel con la ayuda de la IA!</p>\n</div>\n<!-- Sección Comunicación y Pensamiento Crítico -->\n<comunicacion>\n<queeschatgpt>\n<modelos>\n<fundamentosprompt>\n<organizacion>\n<tecnicasavanzadas>\n<funcioneslimites>\n<practica></practica></funcioneslimites></tecnicasavanzadas></organizacion></fundamentosprompt></modelos></queeschatgpt></comunicacion>";

				const frontmatter = {"layout":"../layouts/PresentacionLayout.astro"};
				const file = "C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/pages/index.md";
				const url = "";
				function rawContent() {
					return "   \r\n                                           \r\n   \r\n\r\n<div class=\"max-w-4xl mx-auto px-4 md:px-0 mt-12 p-2 md:p-12\">\r\n  <div class=\"mb-8\">\r\n    <span class=\"inline-block text-black font-space font-bold text-xl md:text-2xl py-2 uppercase tracking-wide\">Bienvenido</span>\r\n  </div>\r\n  <h1 class=\"text-5xl md:text-6xl font-space font-bold mb-6 uppercase tracking-tight bg-gradient-to-r from-yellow-500 via-fuchsia-600 to-cyan-700 bg-clip-text text-transparent\">Creatividad Potenciada con ChatGPT</h1>\r\n  <h2 class=\"text-3xl font-space text-black mb-8 uppercase tracking-tight\">Mini Curso para Creativos y Community Managers</h2>\r\n  <p class=\"text-xl font-inter text-gray-700 mb-8 max-w-2xl\">Bienvenido a este mini curso diseñado para creativos y community managers, donde se profundizará sobre cómo aprovechar ChatGPT como una herramienta de inspiración, productividad y generación de ideas.</p>\r\n  <ul class=\"list-disc list-inside text-lg text-gray-800 mb-8 text-left max-w-xl\">\r\n    <li>Descubre cómo crear prompts efectivos para obtener resultados sorprendentes.</li>\r\n    <li>Aprende técnicas para brainstorming, redacción y automatización de tareas creativas.</li>\r\n    <li>Explora casos reales y ejercicios prácticos para potenciar tu día a día profesional.</li>\r\n  </ul>\r\n  <p class=\"text-lg text-gray-500\">¡Comienza a explorar y lleva tu creatividad al siguiente nivel con la ayuda de la IA!</p>\r\n</div>\r\n\r\n<!-- Sección Comunicación y Pensamiento Crítico -->\r\n\r\n\r\n\r\n<Comunicacion />\r\n<QueEsChatGPT />\r\n<Modelos />\r\n<FundamentosPrompt />\r\n<Organizacion />\r\n<TecnicasAvanzadas />\r\n<FuncionesLimites />\r\n<Practica />\r\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$PresentacionLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
