import { ACTIONS } from "../actions/toDoActions";

export default function toDoReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, newToDo(action.payload.name)];
    case ACTIONS.DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.payload.id);
    case ACTIONS.TOGGLE_TODO:
      return state.map((toDo) => {
        if (toDo.id === action.payload.id) {
          return { ...toDo, complete: !toDo.complete };
        }
        return toDo;
      });

    default:
      return state;
  }
}

function newToDo(name) {
  return { id: Date.now(), name: name, complete: false };
}
