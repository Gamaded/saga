import { useEffect } from "react";
import { action, useAppSelector } from "../../store/root-store";
import { Todo } from "../todo/todo";
import styles from "./todo-list.module.scss";

export const TodoList = () => {
  const { todos } = useAppSelector((state) => state.todos);

  useEffect(() => {
    action("SET_TODOS");
  }, []);

  return (
    <div className={styles.wrapper}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
