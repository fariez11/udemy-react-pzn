import { createSlice } from "@reduxjs/toolkit";

let id = 1;
export const todoListSlice = createSlice({
    name: 'todoList',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const { name } = action.payload;
            state.push({ name, id: id++ })
        },
        updateTodo: (state, action) => {
            const { id, name } = action.payload;
            const todo = state.find(todo => todo.id === id);
            if (todo) {
                todo.name = name;
            }
        },
        removeTodo: (state, action) => {
            const { id } = action.payload;
            const index = state.findIndex(todo => todo.id === id);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    },
    selectors: {
        getTodo (state, id){
            return state.find(todo => todo.id === id);
        }
    }
})

export const { addTodo, updateTodo, removeTodo } = todoListSlice.actions;

export const {getTodo} = todoListSlice.selectors;