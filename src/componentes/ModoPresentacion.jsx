import React, { useState } from "react";

export default function ModoPresentacion({ children }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className="fixed bottom-6 right-6 z-50 bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg text-lg font-bold hover:bg-blue-800 transition"
        onClick={() => setShow(true)}
      >
        Modo presentación
      </button>
      {show && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 w-screen h-screen">
          <button
            className="absolute top-8 right-8 text-5xl text-white hover:text-blue-300 font-bold z-[101]"
            onClick={() => setShow(false)}
            aria-label="Cerrar modo presentación"
            style={{ lineHeight: 1 }}
          >
            ×
          </button>
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full max-w-6xl px-8 md:px-24 py-12 md:py-24 text-center">
              <div className="text-3xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-8 animate-fade-in">
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
