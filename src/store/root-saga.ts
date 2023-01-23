import { PayloadAction } from "@reduxjs/toolkit";
import { put, all, takeEvery } from "redux-saga/effects";
import { getRandomNumber } from "../utils/get-tandom-number";
import { addNewToDo, setTodos } from "./reducers/todos-reducer";

export type TRawToDo = {
  name: string;
  desc: string;
};

const getTodos = async (): Promise<TRawToDo[]> => {
  const request = new Promise<TRawToDo[]>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          name: "first async todo",
          desc: "first async todo",
        },
        {
          name: "second async todo",
          desc: "second async todo",
        },
      ]);
    }, 1000);
  });

  return await request;
};

export function* processRawToDo({ payload }: PayloadAction<TRawToDo>) {
  const processedToDo = {
    ...payload,
    id: getRandomNumber(),
  };
  yield put(addNewToDo(processedToDo));
}

function* recieveTodos() {
  const res: TRawToDo[] = yield getTodos();
  const todos = res.map((rawTodo) => ({
    ...rawTodo,
    id: getRandomNumber(),
  }));
  yield put(setTodos(todos));
}

export function* watchSetToDos() {
  yield takeEvery("SET_TODOS", recieveTodos);
}

export function* watchAddNewTodo() {
  yield takeEvery("ADD_TODO", processRawToDo);
}

export function* rootSaga() {
  yield all([watchSetToDos(), watchAddNewTodo()]);

  yield;
}
