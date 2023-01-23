import { FormEvent, ChangeEvent, useState } from "react";
import { TRawToDo } from "../../store/root-saga";
import { action } from "../../store/root-store";

import styles from "./form.module.scss";

export const Form = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onDescChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    action<TRawToDo>({
      type: "ADD_TODO",
      payload: {
        name: title,
        desc,
      },
    });
    setTitle("");
    setDesc("");
  };

  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <input type="text" value={title} onChange={onTitleChange} />
      <textarea value={desc} onChange={onDescChange} />
      <button type="submit">add</button>
    </form>
  );
};
