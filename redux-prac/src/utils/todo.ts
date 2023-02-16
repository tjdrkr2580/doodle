import { AnyAction } from "redux";
import { todoTypes } from "../type";

const initialState: todoTypes[] = [
  {
    id: 1,
    todo: "dddd",
    desc: "dwaddawd",
    isDone: false,
  },
];

const TODO_ADD = "ADD_ONE";
const TODO_REMOVE = "MINUS_ONE";
const TODO_UPDATE = "UPDATE_ONE";

export const todo_add = ({ todo, desc }: Partial<todoTypes>) => {
  return {
    type: TODO_ADD,
    todo,
    desc,
  };
};

export const todo_remove = (id: number) => {
  return {
    type: TODO_REMOVE,
    id,
  };
};

export const todo_update = (id: boolean) => {
  return {
    type: TODO_UPDATE,
    id,
  };
};

const todoReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case TODO_ADD:
      return [
        ...state,
        {
          id: Date.now(),
          todo: action.todo,
          desc: action.desc,
          isDone: false,
        },
      ];
    case TODO_REMOVE:
      return state.filter((todo) => todo.id !== action.id);
    case TODO_UPDATE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    default:
      return state;
  }
};

export default todoReducer;
