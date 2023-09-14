import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  { AuthContextProvider } from './Components/Store/AuthContext';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './ReduxStore/Index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
    </AuthContextProvider>
);
