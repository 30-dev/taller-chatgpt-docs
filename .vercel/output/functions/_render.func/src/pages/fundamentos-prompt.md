---
layout: ../layouts/PresentacionLayout.astro
title: "Fundamentos y Anatomía del Prompt"
description: "Principios, estructura y ejemplos para crear prompts efectivos en ChatGPT."
---

<div class="max-w-4xl mx-auto px-4 md:px-0 p-8 md:p-16 bg-white">
  <h1 class="text-5xl md:text-6xl font-space font-bold mb-10 mt-0 uppercase tracking-tight bg-gradient-to-r from-cyan-700 via-fuchsia-600 to-yellow-400 bg-clip-text text-transparent">Fundamentos y Anatomía del Prompt</h1>

  <div class="grid md:grid-cols-2 gap-12 mb-12">
    <div>
      <h2 class="text-2xl font-space font-bold mb-4 text-fuchsia-600">¿Qué es un prompt?</h2>
      <p class="text-lg text-gray-800 mb-4">Un prompt es la <span class="text-fuchsia-500 font-semibold">instrucción o mensaje</span> que das a un modelo de inteligencia artificial (como ChatGPT) para generar una respuesta.</p>
      <blockquote class="italic text-gray-600 border-l-4 border-cyan-400 pl-4 mb-4">“Mientras más claro y estructurado sea tu prompt, mejores resultados obtendrás.”</blockquote>
    </div>
    <div>
      <h2 class="text-2xl font-space font-bold mb-4 text-fuchsia-600">¿Por qué es importante?</h2>
      <ul class="list-disc list-inside text-base text-gray-700 ml-4">
        <li>Obtener <span class="text-fuchsia-500 font-semibold">ideas más útiles</span> y accionables.</li>
        <li><span class="text-fuchsia-500 font-semibold">Ahorrar tiempo</span> en iteraciones.</li>
        <li>Lograr <span class="text-fuchsia-500 font-semibold">contenidos alineados</span> con el tono y estrategia de marca.</li>
        <li><span class="text-fuchsia-500 font-semibold">Optimizar procesos</span> creativos y de análisis.</li>
      </ul>
    </div>
  </div>

  <!-- Anatomía de un Prompt Poderoso -->
  <h2 class="text-3xl font-space font-bold mb-10 mt-16 bg-gradient-to-r from-cyan-700 via-fuchsia-600 to-yellow-400 bg-clip-text text-transparent">Anatomía de un Prompt Poderoso</h2>
  <p class="text-lg text-gray-700 mb-10 max-w-2xl">Un prompt efectivo tiene cinco elementos clave. Cada uno cumple una función específica para que la IA entienda y entregue el mejor resultado posible.</p>
  <div class="grid md:grid-cols-3 gap-8 mb-12">
    <!-- INPUT -->
    <div class="bg-cyan-50 border-l-4 border-cyan-400 rounded-lg p-6 shadow-sm flex flex-col items-start">
      <div class="flex items-center mb-2"><svg class="w-6 h-6 mr-2 text-cyan-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 20h9"/><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.5a2.121 2.121 0 1 1-3 3l-7.5 7.5V20h6.5l7.5-7.5a2.121 2.121 0 1 1-3-3z"/></svg><span class="font-bold text-cyan-700 text-lg">INPUT</span></div>
      <p class="mb-2 text-gray-700">¿Qué le pides a la IA? Instrucción principal, clara y orientada a la acción.</p>
      <span class="italic text-cyan-700">Ejemplo: “Redacta un copy breve para Instagram sobre un auto eléctrico.”</span>
    </div>
    <!-- OUTPUT -->
    <div class="bg-fuchsia-50 border-l-4 border-fuchsia-400 rounded-lg p-6 shadow-sm flex flex-col items-start">
      <div class="flex items-center mb-2"><svg class="w-6 h-6 mr-2 text-fuchsia-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg><span class="font-bold text-fuchsia-700 text-lg">OUTPUT</span></div>
      <p class="mb-2 text-gray-700">¿Qué esperas recibir? Formato o tipo de contenido: texto, tabla, título, etc.</p>
      <span class="italic text-fuchsia-700">Ejemplo: “Un copy de máximo 200 caracteres con tono inspirador.”</span>
    </div>
    <!-- OBJETIVO -->
    <div class="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 shadow-sm flex flex-col items-start">
      <div class="flex items-center mb-2"><svg class="w-6 h-6 mr-2 text-yellow-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3"/></svg><span class="font-bold text-yellow-700 text-lg">OBJETIVO</span></div>
      <p class="mb-2 text-gray-700">¿Para qué lo necesitas? Propósito o meta del contenido.</p>
      <span class="italic text-yellow-700">Ejemplo: “Queremos generar expectativa por el lanzamiento del nuevo modelo.”</span>
    </div>
  </div>
  <div class="grid md:grid-cols-2 gap-8 mb-16">
    <!-- CONTEXTO -->
    <div class="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-6 shadow-sm flex flex-col items-start">
      <div class="flex items-center mb-2"><svg class="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2h5"/><circle cx="12" cy="7" r="4"/></svg><span class="font-bold text-blue-700 text-lg">CONTEXTO</span></div>
      <p class="mb-2 text-gray-700">¿Qué información adicional necesita la IA? Marca, campaña, público, canal, etc.</p>
      <span class="italic text-blue-700">Ejemplo: “Es para la cuenta de DongFeng en Instagram, dirigida a jóvenes urbanos que valoran tecnología y movilidad eficiente.”</span>
    </div>
    <!-- RESTRICCIONES -->
    <div class="bg-gray-50 border-l-4 border-gray-400 rounded-lg p-6 shadow-sm flex flex-col items-start">
      <div class="flex items-center mb-2"><svg class="w-6 h-6 mr-2 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-1.414 1.414M6.343 17.657l-1.414 1.415M12 8v4m0 4h.01"/></svg><span class="font-bold text-gray-700 text-lg">RESTRICCIONES</span></div>
      <p class="mb-2 text-gray-700">¿Qué debe evitar la IA? Límites de palabras, tono, referencias, etc.</p>
      <span class="italic text-gray-700">Ejemplo: “No usar tecnicismos. Evitar lenguaje sexista. No superar las 2 líneas.”</span>
    </div>
  </div>

  

  <!-- Ejemplo de Prompt Completo -->
  <h2 class="text-2xl font-space font-bold mb-8 mt-16 text-fuchsia-600">Ejemplo de Prompt Completo</h2>
  <div class="bg-white border border-fuchsia-200 rounded-xl shadow-md p-6 mb-6">
    <div class="grid md:grid-cols-5 gap-4 mb-4">
      <div class="flex flex-col items-start">
        <span class="text-xs font-bold text-cyan-700 uppercase mb-1">INPUT</span>
        <span class="text-xs text-cyan-700 mb-1">¿Qué le pides a la IA? Instrucción principal, clara y orientada a la acción.</span>
        <span class="text-gray-800">Redacta un copy emocional para redes sociales.</span>
      </div>
      <div class="flex flex-col items-start">
        <span class="text-xs font-bold text-fuchsia-700 uppercase mb-1">OUTPUT</span>
        <span class="text-xs text-fuchsia-700 mb-1">¿Qué esperas recibir? Formato o tipo de contenido: texto, tabla, título, etc.</span>
        <span class="text-gray-800">Una frase breve (máx. 200 caracteres) para post en Instagram.</span>
      </div>
      <div class="flex flex-col items-start">
        <span class="text-xs font-bold text-yellow-700 uppercase mb-1">OBJETIVO</span>
        <span class="text-xs text-yellow-700 mb-1">¿Para qué lo necesitas? Propósito o meta del contenido.</span>
        <span class="text-gray-800">Conectar emocionalmente con fans y generar expectativa por el estreno de una nueva temporada.</span>
      </div>
      <div class="flex flex-col items-start">
        <span class="text-xs font-bold text-blue-700 uppercase mb-1">CONTEXTO</span>
        <span class="text-xs text-blue-700 mb-1">¿Qué información adicional necesita la IA? Marca, campaña, público, canal, etc.</span>
        <span class="text-gray-800">The Good Doctor por Sony Channel Latam. Estreno en horario estelar. Público: fans fieles del drama médico.</span>
      </div>
      <div class="flex flex-col items-start">
        <span class="text-xs font-bold text-gray-700 uppercase mb-1">RESTRICCIONES</span>
        <span class="text-xs text-gray-700 mb-1">¿Qué debe evitar la IA? Límites de palabras, tono, referencias, etc.</span>
        <span class="text-gray-800">Evitar spoilers. Tono empático sin exagerar. No repetir frases como “prepara los pañuelos”.</span>
      </div>
    </div>
    <div class="flex items-center gap-2 mb-2 mt-4">
      <svg class="w-5 h-5 text-fuchsia-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2l4-4"/></svg>
      <span class="font-bold text-fuchsia-700">Prompt final:</span>
    </div>
    <div class="bg-fuchsia-50 border-l-4 border-fuchsia-400 rounded p-4 text-gray-900 font-mono text-sm mb-4 whitespace-pre-line">
Redacta un copy emocional para redes sociales.
Una frase breve (máx. 200 caracteres) para post en Instagram.
Conectar emocionalmente con fans y generar expectativa por el estreno de una nueva temporada.
Es para el estreno de una nueva temporada de The Good Doctor por Sony Channel Latam. El estreno será transmitido en horario estelar. El público objetivo son fans fieles del drama médico.
Evitar spoilers. Usar un tono empático pero sin exagerar. No repetir frases ya usadas como “prepara los pañuelos”.
    </div>
    <div class="flex items-center gap-2 mb-2">
      <svg class="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2l4-4"/></svg>
      <span class="font-bold text-cyan-700">Respuesta de la IA:</span>
    </div>
    <div class="bg-cyan-50 border-l-4 border-cyan-400 rounded p-4 text-gray-900 italic">
"Esta temporada, los latidos del corazón se sienten más cerca. Prepárate para emocionarte con cada historia. #TheGoodDoctorLatam"
    </div>
  </div>

  <div class="bg-white border border-fuchsia-200 rounded-xl shadow-md p-6 mb-16">
    <div class="grid md:grid-cols-5 gap-4 mb-4">
      <div class="flex flex-col items-start">
        <span class="text-xs font-bold text-cyan-700 uppercase mb-1">INPUT</span>
        <span class="text-xs text-cyan-700 mb-1">¿Qué le pides a la IA? Instrucción principal, clara y orientada a la acción.</span>
        <span class="text-gray-800">Genera un texto promocional para sitio web.</span>
      </div>
      <div class="flex flex-col items-start">
        <span class="text-xs font-bold text-fuchsia-700 uppercase mb-1">OUTPUT</span>
        <span class="text-xs text-fuchsia-700 mb-1">¿Qué esperas recibir? Formato o tipo de contenido: texto, tabla, título, etc.</span>
        <span class="text-gray-800">Un párrafo corto (máx. 80 palabras) que explique un beneficio clave.</span>
      </div>
      <div class="flex flex-col items-start">
        <span class="text-xs font-bold text-yellow-700 uppercase mb-1">OBJETIVO</span>
        <span class="text-xs text-yellow-700 mb-1">¿Para qué lo necesitas? Propósito o meta del contenido.</span>
        <span class="text-gray-800">Resaltar cómo Openpay ayuda a pequeñas empresas a cobrar en línea sin complicaciones.</span>
      </div>
      <div class="flex flex-col items-start">
        <span class="text-xs font-bold text-blue-700 uppercase mb-1">CONTEXTO</span>
        <span class="text-xs text-blue-700 mb-1">¿Qué información adicional necesita la IA? Marca, campaña, público, canal, etc.</span>
        <span class="text-gray-800">Marca: Openpay México. Público: emprendedores jóvenes sin experiencia técnica. Nueva landing page de registro.</span>
      </div>
      <div class="flex flex-col items-start">
        <span class="text-xs font-bold text-gray-700 uppercase mb-1">RESTRICCIONES</span>
        <span class="text-xs text-gray-700 mb-1">¿Qué debe evitar la IA? Límites de palabras, tono, referencias, etc.</span>
        <span class="text-gray-800">Evitar tecnicismos como “API”, “backend”, etc. Tono claro, útil y empático. No usar frases como “cambia tu vida”.</span>
      </div>
    </div>
    <div class="flex items-center gap-2 mb-2 mt-4">
      <svg class="w-5 h-5 text-fuchsia-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2l4-4"/></svg>
      <span class="font-bold text-fuchsia-700">Prompt final:</span>
    </div>
    <div class="bg-fuchsia-50 border-l-4 border-fuchsia-400 rounded p-4 text-gray-900 font-mono text-sm mb-4 whitespace-pre-line">
Genera un texto promocional para sitio web.
Un párrafo corto (máx. 80 palabras) que explique un beneficio clave.
Resaltar cómo Openpay ayuda a pequeñas empresas a cobrar en línea sin complicaciones.
Marca: Openpay México. Público: emprendedores jóvenes que no tienen experiencia técnica. Se trata de una nueva landing page de registro.
Evitar tecnicismos como “API”, “backend”, etc. Tono claro, útil y empático. No usar frases como “cambia tu vida”.
    </div>
    <div class="flex items-center gap-2 mb-2">
      <svg class="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2l4-4"/></svg>
      <span class="font-bold text-cyan-700">Respuesta de la IA:</span>
    </div>
    <div class="bg-cyan-50 border-l-4 border-cyan-400 rounded p-4 text-gray-900 italic">
"Con Openpay, cobrar en línea es fácil y seguro. Regístrate en minutos y comienza a recibir pagos sin complicaciones, sin tecnicismos y con el respaldo de una plataforma confiable."
    </div>
  </div>
</div>
