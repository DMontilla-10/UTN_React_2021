import React, { useEffect, useState, useRef } from "react";

/**
 * useRef()
 * 
 * Persistir valores a traves de nuevos renderizados
 * Refenricas elementos del DOM
 * Guardar valores previos del estado
 * 
 */

const NameInput = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(1)
  const inputRef = useRef()
  const prevName = useRef('')

  useEffect(()=>{
    renderCount.current = renderCount.current + 1
    prevName.current = name
  }, [name])

  function focus() {
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <div>Ahora dice {name} antes decía {prevName.current}</div>
      <span>El componente se renderizó {renderCount.current} veces</span>
      <button onClick={focus}>Focus</button>
    </>
  );
};

export default NameInput;
