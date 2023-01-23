import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { todosReducer } from "./reducers/todos-reducer";
import { rootSaga } from "./root-saga";

const SagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(SagaMiddleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const action = <T = unknown>(type: string | PayloadAction<T>) => {
  if (typeof type === "string") {
    store.dispatch({ type });
  } else {
    store.dispatch(type);
  }
};

SagaMiddleware.run(rootSaga);
