import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  profiles:[],
  totalAmount:0,
  FinalAmount:0,
});

export const AuthContextProvider = (props) => {
    const initialToken=localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {

    setToken(token);
    localStorage.setItem('token',token);
   
    
  };



  const logoutHandler = () => {
    localStorage.removeItem('token')
    setToken(null);
  };
  

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    profiles:[],
    totalAmount:0,
    FinalAmount:0,
  };
 

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
    