import { Provider } from "react-redux";
import { store } from "./store/root-store";
import styles from "./App.module.scss";
import { TodoList } from "./components/todos-list/todo-list";
import { Form } from "./components/form/form";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.mainWrapper}>
        <TodoList />
        <Form />
      </div>
    </Provider>
  );
}

export default App;
