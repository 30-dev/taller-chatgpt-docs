---
layout: ../layouts/PresentacionLayout.astro
title: "¿Qué es ChatGPT y cómo funciona?"
description: "Introducción a ChatGPT, sus ventajas, modelos y ejemplos de uso en la industria."
---

<div class="max-w-4xl mx-auto px-4 md:px-0 p-8 md:p-16 bg-white">
  <h1 class="text-5xl md:text-6xl font-space font-bold mb-10 mt-0 uppercase tracking-tight bg-gradient-to-r from-cyan-700 via-fuchsia-600 to-yellow-400 bg-clip-text text-transparent">¿Qué es ChatGPT y cómo funciona?</h1>
  <p class="text-xl text-gray-700 mb-8 max-w-2xl">ChatGPT es una inteligencia artificial basada en <span class="font-bold text-fuchsia-700">modelos de lenguaje</span>. Un modelo es un sistema entrenado para predecir y generar texto a partir de ejemplos, aprendiendo patrones, estilos y conocimientos de grandes cantidades de información. Los modelos son el "cerebro" detrás de ChatGPT: según el modelo que elijas, la IA puede ser más rápida, creativa, precisa o multimodal.</p>
  <p class="text-lg text-gray-700 mb-8 max-w-2xl">En resumen: <span class="font-bold text-cyan-700">ChatGPT</span> es la interfaz conversacional, y los <span class="font-bold text-fuchsia-700">modelos</span> (como GPT-3.5, GPT-4, GPT-4o, etc.) son las versiones de IA que generan las respuestas.</p>

  <!-- Diagrama explicativo -->
  <div class="flex flex-col items-center justify-center mb-8">
    <span class="text-base text-gray-700 bg-gray-50 border border-cyan-200 rounded px-4 py-2 font-space font-semibold">Flujo: Usuario → ChatGPT (interfaz) → Modelo (IA) → Respuesta</span>
  </div>

  <div class="bg-gradient-to-br from-cyan-50 to-fuchsia-50 border-l-4 border-fuchsia-400 p-6 mb-10 rounded-lg shadow-sm">
    <h3 class="text-xl font-bold font-space mb-2 text-fuchsia-700">Piensa en ChatGPT como un chef creativo</h3>
    <p class="text-base text-gray-700 mb-2">ChatGPT fue entrenado leyendo millones de textos, como un chef que prueba miles de recetas. Cuando le das un <span class="font-semibold text-cyan-700">prompt</span> (instrucción), mezcla lo que aprendió para crear una respuesta nueva, adaptada a tu pedido.</p>
    <p class="text-base text-gray-700">No copia, sino que <span class="font-semibold text-fuchsia-700">predice</span> palabra por palabra lo que tiene más sentido, como un chef que improvisa un platillo según tus gustos.</p>
  </div>

  <!-- Tip sobre límites y buenas prácticas -->
  <div class="flex items-center gap-3 border-l-4 border-cyan-400 bg-cyan-50 text-gray-700 italic p-6 mb-12">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#06b6d4" class="w-8 h-8 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2m0 14v2m7-7h2M3 12H5m15.07-6.93l-1.41 1.41M6.34 17.66l-1.41 1.41m12.02 0l1.41 1.41M6.34 6.34L4.93 4.93M9 18a3 3 0 0 1 6 0c0 1.306-.835 2.417-2 2.83V21a1 1 0 1 1-2 0v-.17A3.001 3.001 0 0 1 9 18Z"/></svg>
    <div>
      <div class="font-bold text-cyan-600 not-italic mb-1">TIP</div>
      <div>ChatGPT no sabe todo: puede inventar datos o equivocarse. Siempre revisa la información importante y dale contexto claro para mejores resultados.</div>
    </div>
  </div>

  <!-- Preguntas frecuentes (FAQ) -->
  <h2 class="text-2xl font-space text-black mb-8 mt-16 uppercase tracking-tight">Preguntas frecuentes</h2>
  <div class="space-y-6 mb-16">
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded">
      <h4 class="font-bold text-yellow-700 mb-1">¿ChatGPT entiende todo lo que le pido?</h4>
      <p class="text-gray-700">Entiende instrucciones claras y contextos bien definidos, pero puede confundirse si el prompt es ambiguo o muy corto.</p>
    </div>
    <div class="bg-fuchsia-50 border-l-4 border-fuchsia-400 p-5 rounded">
      <h4 class="font-bold text-fuchsia-700 mb-1">¿Puede acceder a internet en tiempo real?</h4>
      <p class="text-gray-700">No, responde con base en lo que aprendió hasta su fecha de corte. Algunos modelos pueden buscar en la web si se habilita esa función.</p>
    </div>
    <div class="bg-cyan-50 border-l-4 border-cyan-400 p-5 rounded">
      <h4 class="font-bold text-cyan-700 mb-1">¿Qué hago si la respuesta no es útil?</h4>
      <p class="text-gray-700">Reformula tu prompt, agrega detalles o pide ejemplos. La calidad del resultado mejora con instrucciones precisas.</p>
    </div>
  </div>
</div>
