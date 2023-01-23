import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TToDo = {
  id: number;
  name: string;
  desc: string;
};

type TTodosState = {
  todos: TToDo[];
};

const initialState: TTodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addNewToDo: (state, action: PayloadAction<TToDo>) => {
      state.todos.push(action.payload);
    },
    deleteToDo: (state, action: PayloadAction<number>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos.splice(index, 1);
    },
    setTodos: (state, action: PayloadAction<TToDo[]>) => {
      state.todos = action.payload;
    },
  },
});

export const { addNewToDo, deleteToDo, setTodos } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
