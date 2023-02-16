import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootReducer } from "./store";
import { todoTypes } from "./type";
import { todo_add, todo_remove } from "./utils/todo";

interface formValue {
  todo: string;
  desc: string;
}

function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<formValue>();
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<formValue> = (data) => {
    dispatch(
      todo_add({
        todo: data.todo,
        desc: data.todo,
      })
    );
    reset();
  };
  const todos = useSelector((state: RootReducer) => state.todoReducer);
  console.log(todos);
  return (
    <>
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("todo", { required: true })} />
        {errors.todo && errors.todo.type === "required" && (
          <div>제대로 입력해라</div>
        )}
        <input type="text" {...register("desc", { required: true })} />
        {errors.desc && errors.desc.type === "required" && (
          <div>제대로 입력해라</div>
        )}
        <button>제출</button>
      </form>
      <div>
        {todos.map((todo: todoTypes) => (
          <>
            <li>{todo.id}</li>
            <li>{todo.todo}</li>
            <li>{todo.desc}</li>
            <li>{!todo.isDone ? "no" : "yes"}</li>
            <button onClick={() => dispatch(todo_remove(todo.id))}>삭제</button>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
