import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from '../types/types.ts'

const todosSlice = createSlice({
    name: "todos",
    initialState: [] as ITodo[],
    reducers: {
        addToTodos: (state, action: PayloadAction<ITodo>) => {
            state.push(action.payload);
        },
        completeThisTodo: (state, action: PayloadAction<ITodo>) => {
            const todo = state.find((item) => item.id === action.payload.id);
            todo!.isCompleted = !todo!.isCompleted;
        },
        deleteFromTodos: (state) => {
            return state.filter((item) => !item.isCompleted);
        },
    },
});

export const {
    addToTodos,
    deleteFromTodos,
    completeThisTodo
} = todosSlice.actions;
export default todosSlice.reducer;