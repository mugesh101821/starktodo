import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{ count: 0 },
    reducers: {
        increment: (state) => {
            state.count +=3;
        },
        decrement: (state) => {
            state.count -=2;   
        },

    },
});

export const { increment,decrement} = counterSlice.actions;

const storeredux =configureStore({
    reducer:{
        counter: counterSlice.reducer,
    },
});
export default storeredux;