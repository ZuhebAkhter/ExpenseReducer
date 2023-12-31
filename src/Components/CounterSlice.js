import { createSlice } from '@reduxjs/toolkit';


const initialState={
    value:0,
    showCounter:true
}
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 5;
    },
    decrement: (state) => {
      state.value -= 5;
    },
    incrementByAmount: (state, action) => {
        state.value += action.payload
      },
      toggle:(state) => {
        state.showCounter=!state.showCounter;
      },
  },
});

export const { increment, decrement,incrementByAmount,toggle } = counterSlice.actions;

export default counterSlice.reducer;