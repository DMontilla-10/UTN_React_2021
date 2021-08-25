import React from "react";
import { ACTIONS } from "../../actions/toDoActions";

export default function ToDo({ toDo, dispatch }) {
  return (
    <>
      <span style={{ color: toDo.complete ? "#AAA" : "#000" }}>
        {toDo.name}
      </span>
      <button onClick={() => dispatch({
          type: ACTIONS.TOGGLE_TODO,
          payload: {id: toDo.id}
      })}>TOGGLE</button>
      <button>DELETE</button>
    </>
  );
}
