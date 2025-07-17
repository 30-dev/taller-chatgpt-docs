import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_BHBAp1yF.mjs';
import 'kleur/colors';
import { $ as $$PresentacionLayout } from '../chunks/PresentacionLayout_BxDVcK9F.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<blockquote>\n<p><strong>Esta página ha sido reemplazada por <code>/comunicacion</code>.</strong></p>\n<p>Puedes eliminar este archivo con seguridad.</p>\n</blockquote>";

				const frontmatter = {"layout":"../layouts/PresentacionLayout.astro","title":"Obsoleto","description":"Esta página ha sido reemplazada por /comunicacion. Puedes eliminar este archivo."};
				const file = "C:/Users/User/Documents/GitHub/taller-chatgpt-docs/src/pages/presentacion.md";
				const url = "/presentacion";
				function rawContent() {
					return "   \r\n                                           \r\n                 \r\n                                                                                               \r\n   \r\n\r\n> **Esta página ha sido reemplazada por `/comunicacion`.**\r\n> \r\n> Puedes eliminar este archivo con seguridad.\r\n";
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
