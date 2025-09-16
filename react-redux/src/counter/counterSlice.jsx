import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state, action) => action.payload ? state + action.payload : state + 1,
        decrement: (state, action) => action.payload ? state - action.payload : state - 1,
        reset: (state) => 0
    },
    selectors: {
        getDoubleCounter: (state) => state * 2,
        getDoubleCounterWithParam: (state, param) => state * param
    }
})

export const { increment, decrement, reset } = CounterSlice.actions;
export const { getDoubleCounter, getDoubleCounterWithParam } = CounterSlice.selectors;