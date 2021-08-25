import React, { useState } from "react";

function estadoInicial() {
    console.log('Renderizando componente')
    return 4
}

const Counter = ({ nombre, setNombre }) => {
  // const { nombre } = props
  // const [count, setCount] = useState(() => estadoInicial())
  const [count, setCount] = useState(0)
  const [apellido, setApellido] = useState('Montilla')

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    // setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
    <h4>Este es un ejemplo de contador y lo diseño {nombre}</h4>
      <button onClick={() => increment()}>+</button>
      <span>{count}</span>
      <span>{apellido}</span>
      <button onClick={() => decrement()}>-</button>
    </>
  );
};

export default Counter;
