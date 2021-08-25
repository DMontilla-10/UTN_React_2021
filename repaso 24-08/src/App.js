import { useState } from "react";
import Counter from "./components/Counter";
import NameInput from "./components/NameInput";
import SlowComponent from "./components/SlowComponent";
import Tabs from "./components/Tabs";
import ToDoList from "./components/ToDoList/index"

function App() {
  /** ELEMENTO: Es la porción de código de más pequeña dentro de React y representa lo que queremos mostrar por pantalla */
  // const mensajeDeBienvenida = <h2>Bienvenida Daniel</h2>;
  
  const [nombre, setNombre] = useState('Daniel')

  return (
    <>
      <h2>Repaso de React. Prof: {nombre}</h2>
      {/* <Counter nombre={nombre} setNombre={setNombre}/> */}
      {/* <Tabs /> */}
      {/* <SlowComponent /> */}
      {/* <NameInput /> */}
      <ToDoList />
    </>
  );
}

export default App;

/** Node >= 10.16 y npm >= 5.6 */

/** npx create-react-app nombre-app */
