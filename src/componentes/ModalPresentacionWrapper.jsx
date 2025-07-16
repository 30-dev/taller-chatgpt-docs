import React, { useState } from "react";
import ModalPresentacion from "./ModalPresentacion.jsx";

export default function ModalPresentacionWrapper({ pasos }) {
  const [mostrar, setMostrar] = useState(false);
  return (
    <>
      <button className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded shadow-lg z-40" onClick={() => setMostrar(true)}>
        Ver presentación interactiva
      </button>
      {mostrar && (
        <ModalPresentacion pasos={pasos} onClose={() => setMostrar(false)} />
      )}
    </>
  );
}
