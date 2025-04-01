import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from '../types/types.ts'

const todosSlice = createSlice({
    name: "todos",
    initialState: [] as ITodo[],
    reducers: {
        addToTodos: (state, action: PayloadAction<ITodo>) => {
            state.push(action.payload);
        },
        deleteFromTodos: (state, action: PayloadAction<ITodo>) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const {
    addToTodos,
    deleteFromTodos,
} = todosSlice.actions;
export default todosSlice.reducer;