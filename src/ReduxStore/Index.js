import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from '../Components/Store/AuthSlice'
import counterReducer from '../Components/CounterSlice'
import expenseSliceReducer from '../Components/Store/ExpenseSlice'

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    counter: counterReducer,
    expense:expenseSliceReducer
  },
});

export default store;