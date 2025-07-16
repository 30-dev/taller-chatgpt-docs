import React, { useState } from "react";

export default function ModalPresentacion({ pasos, onClose }) {
  const [pasoActual, setPasoActual] = useState(0);
  const paso = pasos[pasoActual];

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center font-space">
      <div className="bg-black rounded-2xl shadow-2xl max-w-2xl w-full p-0 relative border-4 border-white">
        <button className="absolute top-4 right-4 text-2xl text-white hover:text-black bg-white/10 hover:bg-white transition rounded-full w-10 h-10 flex items-center justify-center font-space" onClick={onClose}>×</button>
        <div className="mb-4 text-sm text-white px-8 pt-8 font-space">
          Paso {pasoActual + 1} de {pasos.length}
        </div>
        <div className="px-8 pb-8">
          <h2 className="text-2xl font-extrabold mb-2 text-white uppercase tracking-tight font-space">{paso.titulo}</h2>
          <p className="text-white leading-relaxed text-lg font-space" dangerouslySetInnerHTML={{ __html: paso.contenido }} />
          <div className="flex justify-between mt-8">
            <button className="text-base px-6 py-2 bg-white border-2 border-black text-black font-bold rounded-full shadow hover:bg-black hover:text-white transition disabled:opacity-50 font-space" onClick={() => setPasoActual(p => Math.max(0, p - 1))} disabled={pasoActual === 0}>Anterior</button>
            <button className="text-base px-6 py-2 bg-black text-white font-bold rounded-full shadow hover:bg-white hover:text-black border-2 border-white transition disabled:opacity-50 font-space" onClick={() => setPasoActual(p => Math.min(pasos.length - 1, p + 1))} disabled={pasoActual === pasos.length - 1}>Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
}
