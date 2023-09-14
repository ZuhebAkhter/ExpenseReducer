import { createSlice } from "@reduxjs/toolkit";

const initialState={
  user:null,
  isPremium:false,
}
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action) => {
   state.user=action.payload;
        },
        setPremium:(state) => {
            state.isPremium=!state.isPremium
        }
        
    }
})

export const {setUser,setPremium} = authSlice.actions;
export default authSlice.reducer;
