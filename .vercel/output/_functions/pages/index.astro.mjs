import { c as createComponent, m as maybeRenderHead, r as renderScript, a as renderTemplate, b as renderComponent, e as createAstro, f as addAttribute, g as renderHead, h as renderSlot } from '../chunks/astro/server_DQliOzhn.mjs';
import 'kleur/colors';
import { Brain, Cog, LineChart, Phone, Mail } from 'lucide-react';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="contact-form" class="space-y-8"> <div> <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label> <input type="email" id="email" name="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="tu@email.com" required> </div> <div class="sm:col-span-2"> <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Mensaje</label> <textarea id="message" name="message" rows="6" class="min-h-[100px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Comentanos tu proyecto"></textarea> </div> <button type="submit" id="submit-button" class="transaction-all text-white py-3 px-5 text-sm font-medium text-center cursor-pointer rounded-lg bg-blue-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-white dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar</button> </form> ${renderScript($$result, "/Users/eyub/Code/vi-solutio/web/src/components/Form.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/eyub/Code/vi-solutio/web/src/components/Form.astro", void 0);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col min-h-screen"> <header class="px-4 lg:px-6 h-14 flex items-center"> <a class="flex items-center justify-center" href="#"> ${renderComponent($$result, "Brain", Brain, { "className": "h-6 w-6" })} <span class="ml-2 text-2xl font-bold">VI Solutio</span> </a> <nav class="ml-auto flex gap-4 sm:gap-6"> <a class="text-sm font-medium hover:underline underline-offset-4" href="#inicio">
Inicio
</a> <a class="text-sm font-medium hover:underline underline-offset-4" href="#servicios">
Servicios
</a> <a class="text-sm font-medium hover:underline underline-offset-4" href="#contacto">
Contacto
</a> </nav> </header> <main class="flex-1"> <section id="inicio" class="w-full py-12 md:py-24 lg:py-32 xl:py-48"> <div class="flex flex-col items-center space-y-4 text-center"> <div class="space-y-2"> <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
Soluciones Innovadoras de IA
</h1> <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
VI Solutio se especializa en ofrecer soluciones innovadoras de inteligencia artificial y tecnología de punta
                  para empresas de diversos sectores.
</p> </div> <div class="space-x-4"> <button>Nuestros Servicios</button> <button>Contáctanos</button> </div> </div> </section> <section id="servicios" class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"> <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
Nuestros Servicios
</h2> <div class="grid gap-10 sm:grid-cols-2 md:grid-cols-3"> <div class="flex flex-col items-center text-center"> ${renderComponent($$result, "Brain", Brain, { "className": "h-12 w-12 mb-4 text-primary" })} <h3 class="text-xl font-bold mb-2">Inteligencia Artificial</h3> <p class="text-gray-500 dark:text-gray-400">
Implementamos soluciones de IA para optimizar procesos y mejorar la toma de decisiones.
</p> </div> <div class="flex flex-col items-center text-center"> ${renderComponent($$result, "Cog", Cog, { "className": "h-12 w-12 mb-4 text-primary" })} <h3 class="text-xl font-bold mb-2">Aprendizaje Automático</h3> <p class="text-gray-500 dark:text-gray-400">
Desarrollamos modelos de machine learning adaptados a las necesidades de cada cliente.
</p> </div> <div class="flex flex-col items-center text-center"> ${renderComponent($$result, "LineChart", LineChart, { "className": "h-12 w-12 mb-4 text-primary" })} <h3 class="text-xl font-bold mb-2">Análisis de Datos</h3> <p class="text-gray-500 dark:text-gray-400">
Ofrecemos insights valiosos a través del análisis avanzado de datos empresariales.
</p> </div> </div> </section> <section class="bg-white dark:bg-gray-900"> <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md"> <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Contáctanos</h2> ${renderComponent($$result, "Form", $$Form, {})} <div class="my-8 flex justify-center gap-12 "> <div class="flex items-center space-x-2"> ${renderComponent($$result, "Phone", Phone, { "className": "h-5 w-5 text-primary dark:text-white" })} <span class="dark:text-white">+34 632 486 184</span> </div> <div class="flex items-center space-x-2"> ${renderComponent($$result, "Mail", Mail, { "className": "h-5 w-5 text-primary dark:text-white" })} <span class="dark:text-white">info@visolutio.com</span> </div> </div> </div> </section> </main> <footer class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"> <p class="text-xs text-gray-500 dark:text-gray-400">© 2024 VI Solutio. Todos los derechos reservados.</p> <nav class="sm:ml-auto flex gap-4 sm:gap-6"> <a class="text-xs hover:underline underline-offset-4" href="#">
Términos de Servicio
</a> <a class="text-xs hover:underline underline-offset-4" href="#">
Política de Privacidad
</a> </nav> </footer></div>`;
}, "/Users/eyub/Code/vi-solutio/web/src/components/Home.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/eyub/Code/vi-solutio/web/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Home, {})} ` })}`;
}, "/Users/eyub/Code/vi-solutio/web/src/pages/index.astro", void 0);

const $$file = "/Users/eyub/Code/vi-solutio/web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
