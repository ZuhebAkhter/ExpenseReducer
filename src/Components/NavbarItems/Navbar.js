import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../Store/AuthContext'
import {useNavigate,Link} from 'react-router-dom'
import { setPremium } from '../Store/AuthSlice'
import { useDispatch,useSelector } from 'react-redux'

const Navbar = (props) => {
  const authCtx=useContext(AuthContext)
  const navigate=useNavigate();
  const [darkButton,showdarkButton]=useState(false)
  const Totalredu = useSelector((state) => state.expense.total);

 const dispatch=useDispatch();

  const onlogoutHandler=()=>{
   authCtx.logout();
   localStorage.removeItem('email')
  navigate('/')
  }
  useEffect(()=>{
    if(Totalredu >= 10000){
      showdarkButton(true)
    }else{
      showdarkButton(false)
    }
  },[Totalredu])

  const toggleHandler=()=>{
   dispatch(setPremium())
  }
  
  
  return (

<nav className='navbar navbar-expand-lg navbar-light bg-secondary'>
  <div className="container-fluid">
    

    <div className="d-flex justify-content-start flex-column flex-md-row flex-sm-row" id="navbarSupportedContent">
     
      <h2 className='me-2'>Expense Tracker</h2>
     {authCtx.isLoggedIn && (<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/welcome">Welcome</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/expenses">Expenses</Link>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li> */}
      </ul>)}
    </div>

    <div className="d-flex align-items-center">
      
      {darkButton && (<button className='btn btn-info' onClick={toggleHandler}>DarKTheme</button>)}
      {authCtx.isLoggedIn && <button onClick={onlogoutHandler} className='btn btn-danger m-2'>LogOut</button>}
    </div>
  </div>
</nav>
  )
}

export default Navbar