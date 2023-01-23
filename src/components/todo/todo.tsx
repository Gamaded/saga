import { deleteToDo, TToDo } from "../../store/reducers/todos-reducer";
import { action } from "../../store/root-store";
import styles from "./todo.module.scss";

type Props = {
  todo: TToDo;
};

export const Todo = ({ todo }: Props) => {
  const onDelete = () => {
    action(deleteToDo(todo.id));
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <p>{todo.name}</p>
        <p>{todo.desc}</p>
      </div>
      <button className={styles.deleteButton} onClick={onDelete}>
        delete
      </button>
    </div>
  );
};
