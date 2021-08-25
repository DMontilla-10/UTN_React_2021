import React, { useReducer, useState} from "react";
import { ACTIONS } from "../../actions/toDoActions";
import toDoReducer from "../../reducers/toDoReducer";
import ToDo from "./ToDo";

const ToDoList = () => {
  const [name, setName] = useState("");
  const [toDos, dispatch] = useReducer(toDoReducer, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name}})
  };

  return (
    <>
    <h3>Lista de Tareas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {toDos.map((toDo) => {
        return <ToDo key={toDo.id} toDo={toDo} dispatch={dispatch} />
      })}
    </>
  );
};

export default ToDoList;
