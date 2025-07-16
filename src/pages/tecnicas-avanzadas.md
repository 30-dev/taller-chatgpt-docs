---
layout: ../layouts/PresentacionLayout.astro
title: "Técnicas Avanzadas de Prompting"
description: "Estrategias, patrones y ejemplos para llevar tus prompts al siguiente nivel en ChatGPT."
---

<div class="max-w-4xl mx-auto px-4 md:px-0 p-8 md:p-16 bg-white">
  <h1 class="text-5xl md:text-6xl font-space font-bold mb-10 mt-0 uppercase tracking-tight bg-gradient-to-r from-cyan-700 via-fuchsia-600 to-yellow-400 bg-clip-text text-transparent">Técnicas Avanzadas de Prompting</h1>

  <ol class="list-decimal list-inside text-lg text-gray-900 mb-12">
    <li class="mb-8 flex items-start gap-4">
      <span class="mt-1"><svg class="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 17l4 4 4-4m-4-5v9"/><path stroke-linecap="round" stroke-linejoin="round" d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z"/></svg></span>
      <div class="w-full">
        <span class="font-bold text-xl text-cyan-600">Encadenamiento de instrucciones <span class="text-fuchsia-500">(Chain Prompting)</span></span>
        <p class="mt-2 mb-2">Divide tareas complejas en pasos secuenciales. Ejemplo:</p>
        <div class="relative bg-gray-800 rounded-xl p-6 mb-2 flex flex-col items-stretch shadow-md">
          <pre class="text-cyan-100 text-sm font-mono whitespace-pre-line mb-3">Resume esta nota de prensa.
Redacta un post de Instagram con tono informal basado en ese resumen.</pre>
        </div>
        <div class="flex justify-end">
          <button onclick="navigator.clipboard.writeText('Resume esta nota de prensa.\nRedacta un post de Instagram con tono informal basado en ese resumen.'); this.innerHTML='<svg class=\'inline w-4 h-4 mr-1\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' viewBox=\'0 0 24 24\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M5 13l4 4L19 7\'/></svg>Copiado!'; setTimeout(()=>{this.innerHTML='<svg class=\'inline w-4 h-4 mr-1\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' viewBox=\'0 0 24 24\'><rect x=\'9\' y=\'9\' width=\'13\' height=\'13\' rx=\'2\'/><path d=\'M5 15V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10\'/></svg>Copiar';}, 1200);" class="bg-white hover:bg-emerald-50 text-emerald-700 text-xs px-5 py-2 rounded-full transition font-bold tracking-wide flex items-center gap-1 cursor-pointer mt-2 mb-4">
            <svg class="inline w-4 h-4 mr-1 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10"/></svg>Copiar
          </button>
        </div>
      </div>
    </li>
    <li class="mb-8 flex items-start gap-4">
      <span class="mt-1"><svg class="w-8 h-8 text-fuchsia-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 20h9"/><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.5a2.121 2.121 0 1 1-3 3l-7.5 7.5V20h6.5l7.5-7.5a2.121 2.121 0 1 1-3-3z"/></svg></span>
      <div class="w-full">
        <span class="font-bold text-xl text-fuchsia-600">Priming o ejemplos guía</span>
        <p class="mt-2 mb-2">Proporciona ejemplos para establecer el estilo o tono deseado. Ejemplo:</p>
        <div class="relative bg-gray-800 rounded-xl p-6 mb-2 flex flex-col items-stretch shadow-md">
          <pre class="text-fuchsia-100 text-sm font-mono whitespace-pre-line mb-3">Aquí tienes dos ejemplos de copies exitosos de Grey’s Anatomy. Ahora genera uno nuevo en este estilo para el episodio de final de temporada.</pre>
        </div>
        <div class="flex justify-end">
          <button onclick="navigator.clipboard.writeText('Aquí tienes dos ejemplos de copies exitosos de Grey’s Anatomy. Ahora genera uno nuevo en este estilo para el episodio de final de temporada.'); this.innerHTML='<svg class=\'inline w-4 h-4 mr-1\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' viewBox=\'0 0 24 24\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M5 13l4 4L19 7\'/></svg>Copiado!'; setTimeout(()=>{this.innerHTML='<svg class=\'inline w-4 h-4 mr-1\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' viewBox=\'0 0 24 24\'><rect x=\'9\' y=\'9\' width=\'13\' height=\'13\' rx=\'2\'/><path d=\'M5 15V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10\'/></svg>Copiar';}, 1200);" class="bg-white hover:bg-emerald-50 text-emerald-700 text-xs px-5 py-2 rounded-full transition cursor font-bold tracking-wide flex items-center gap-1 cursor-pointer mt-2 mb-4">
            <svg class="inline w-4 h-4 mr-1 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10"/></svg>Copiar
          </button>
        </div>
      </div>
    </li>
    <li class="mb-8 flex items-start gap-4">
      <span class="mt-1"><svg class="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3"/></svg></span>
      <div class="w-full">
        <span class="font-bold text-xl text-fuchsia-600">Roles y tono asignado</span>
        <p class="mt-2 mb-2">Indica al modelo desde qué rol debe responder o con qué actitud. Ejemplo:</p>
        <div class="relative bg-gray-800 rounded-xl p-6 mb-2 flex flex-col items-stretch shadow-md">
          <pre class="text-yellow-100 text-sm font-mono whitespace-pre-line mb-3">Actúa como un creativo senior en una agencia digital y genera 3 copies con tono irreverente para Tecnolite.</pre>
        </div>
        <div class="flex justify-end">
          <button onclick="navigator.clipboard.writeText('Actúa como un creativo senior en una agencia digital y genera 3 copies con tono irreverente para Tecnolite.'); this.innerHTML='<svg class=\'inline w-4 h-4 mr-1\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' viewBox=\'0 0 24 24\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M5 13l4 4L19 7\'/></svg>Copiado!'; setTimeout(()=>{this.innerHTML='<svg class=\'inline w-4 h-4 mr-1\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' viewBox=\'0 0 24 24\'><rect x=\'9\' y=\'9\' width=\'13\' height=\'13\' rx=\'2\'/><path d=\'M5 15V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10\'/></svg>Copiar';}, 1200);" class="bg-white hover:bg-emerald-50 text-emerald-700 text-xs px-5 py-2 rounded-full transition cursor font-bold tracking-wide flex items-center gap-1 cursor-pointer mt-2 mb-4">
            <svg class="inline w-4 h-4 mr-1 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10"/></svg>Copiar
          </button>
        </div>
      </div>
    </li>
    <li class="mb-8 flex items-start gap-4">
      <span class="mt-1"><svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="12" x="2" y="6" rx="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M6 10h.01M6 14h.01M10 10h.01M10 14h.01M14 10h.01M14 14h.01M18 10h.01M18 14h.01"/></svg></span>
      <div class="w-full">
        <span class="font-bold text-xl text-fuchsia-600">Condiciones múltiples</span>
        <p class="mt-2 mb-2">Pide variantes específicas bajo condiciones distintas. Ejemplo:</p>
        <div class="relative bg-gray-800 rounded-xl p-6 mb-2 flex flex-col items-stretch shadow-md">
          <pre class="text-blue-100 text-sm font-mono whitespace-pre-line mb-3">Dame dos versiones del mismo copy: una para Facebook en tono informativo y otra para TikTok con tono humorístico.</pre>
        </div>
        <div class="flex justify-end">
          <button onclick="navigator.clipboard.writeText('Dame dos versiones del mismo copy: una para Facebook en tono informativo y otra para TikTok con tono humorístico.'); this.innerHTML='<svg class=\'inline w-4 h-4 mr-1\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' viewBox=\'0 0 24 24\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M5 13l4 4L19 7\'/></svg>Copiado!'; setTimeout(()=>{this.innerHTML='<svg class=\'inline w-4 h-4 mr-1\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' viewBox=\'0 0 24 24\'><rect x=\'9\' y=\'9\' width=\'13\' height=\'13\' rx=\'2\'/><path d=\'M5 15V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10\'/></svg>Copiar';}, 1200);" class="bg-white hover:bg-emerald-50 text-emerald-700 text-xs px-5 py-2 rounded-full transition cursor font-bold tracking-wide flex items-center gap-1 cursor-pointer mt-2 mb-4">
            <svg class="inline w-4 h-4 mr-1 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10"/></svg>Copiar
          </button>
        </div>
      </div>
    </li>
    <li class="mb-8 flex items-start gap-4">
      <span class="mt-1"><svg class="w-8 h-8 text-fuchsia-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></span>
      <div class="w-full">
        <span class="font-bold text-xl text-fuchsia-600">Afinado de resultados con Follow-ups</span>
        <p class="mt-2 mb-2">En lugar de hacer un solo prompt, pide ajustes sobre la primera respuesta. Ejemplo:</p>
        <div class="relative bg-gray-800 rounded-xl p-6 mb-2 flex flex-col items-stretch shadow-md">
          <pre class="text-fuchsia-100 text-sm font-mono whitespace-pre-line mb-3">Hazlo más emocional.
Reduce a 100 caracteres
Agrega un emoji y un CTA al final</pre>
        </div>
        <div class="flex justify-end">
          <button onclick="navigator.clipboard.writeText('Hazlo más emocional.\nReduce a 100 caracteres\nAgrega un emoji y un CTA al final'); this.innerHTML='<svg class=\'inline w-4 h-4 mr-1\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' viewBox=\'0 0 24 24\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M5 13l4 4L19 7\'/></svg>Copiado!'; setTimeout(()=>{this.innerHTML='<svg class=\'inline w-4 h-4 mr-1\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' viewBox=\'0 0 24 24\'><rect x=\'9\' y=\'9\' width=\'13\' height=\'13\' rx=\'2\'/><path d=\'M5 15V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10\'/></svg>Copiar';}, 1200);" class="bg-white hover:bg-emerald-50 text-emerald-700 text-xs px-5 py-2 rounded-full transition cursor font-bold tracking-wide flex items-center gap-1 cursor-pointer mt-2 mb-4">
            <svg class="inline w-4 h-4 mr-1 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10"/></svg>Copiar
          </button>
        </div>
      </div>
    </li>
  </ol>

  <div class="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 shadow-sm mb-8 flex items-center gap-3">
    <svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2l4-4"/></svg>
    <span class="text-yellow-800 font-medium">Tip: Experimenta combinando técnicas y revisa los resultados para encontrar el estilo que mejor se adapta a tu objetivo.</span>
  </div>

</div>
