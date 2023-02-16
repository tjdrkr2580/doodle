import { combineReducers, createStore } from "redux";
import todo from "./utils/todo";

const rootReducer = combineReducers({
  todoReducer: todo,
});
const store = createStore(rootReducer);

export default store;

export type RootReducer = ReturnType<typeof rootReducer>;
