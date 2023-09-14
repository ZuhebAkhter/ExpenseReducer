import React,{ useEffect,useState} from 'react'
import Authentication from './Components/AuthenticationFolder/Authentication'
import Navbar from './Components/NavbarItems/Navbar'
import {Routes,Route} from 'react-router-dom'
import Main from './Components/MainBody/Main'
import ProfileUpdate from './Components/MainBody/ProfileUpdate'
import ExpensesInput from './Components/MainBody/ExpensesInput'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartData,sendCartData } from './Components/Store/cart-action'
const App = () => {
  const [expenses, setExpenses] = useState([]);
  const cart=useSelector(state => state.expense)
const dispatch=useDispatch();
let isInitial = true;

  
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
   

      dispatch(sendCartData(cart));
    
  }, [cart, dispatch]);

  
  const deleteExpensesApi=async(myid,id)=>{
    console.log('work')
setExpenses(expenses.filter((expense)=>expense.myid !== myid))
  const res=await fetch(`https://expensetracker011-default-rtdb.firebaseio.com/expenses/${id}.json`,{
    method:'DELETE',
  })
  }
  console.log(expenses)
  return (
    <div>
    <header>
      <Navbar/>
    </header>

    <Routes>
      <Route path='/'  element={<Authentication/>}></Route>
     <Route path='/welcome' element={<Main/>}></Route>
     <Route path='/welcome/profile' element={<ProfileUpdate/>}></Route>
     <Route path='/expenses' element={<ExpensesInput ApiExpenses={expenses} delete={deleteExpensesApi}/>}></Route>

     </Routes>

     </div>
  )
}

export default App