import { createSlice } from "@reduxjs/toolkit";

const initialState={
    expenses:[],
    total:0,
}
const expenseSlice=createSlice({
    name:'expense',
    initialState,
    reducers:{
        setTotal:(state,action) => {
    state.total=state.total + action.payload;
        },

        addExpense(state,action) {
            const newExpen =action.payload;
            state.total=state.total + newExpen.amount;
      state.expenses.unshift({
        myid: newExpen.myid,
        amount:newExpen.amount,
        description: newExpen.description,
        category: newExpen.category,
        date:newExpen.date
      });
        },
        removeExpense: (state,action) => {
                    const exp=action.payload;
                    state.total= state.total - exp.amount;
            
                    state.expenses=state.expenses.filter(item => item.myid !== exp.myid)
                },
        editExpensez:(state,action) => {
            const index = state.expenses.findIndex(expense => expense.myid === action.payload.myid);
            if (index !== -1) {
              state.expenses[index] = action.payload;
            }
        },
        replaceCart:(state,action) => {
            state.total=action.payload.total;
            state.expenses=action.payload.expenses;
        }
    }
})
export const {setTotal,addExpense,removeExpense,editExpensez, replaceCart} = expenseSlice.actions;
 export default expenseSlice.reducer;

