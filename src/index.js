import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import axios from 'axios';
import { store } from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
// axios.defaults.baseURL= "http://localhost:8080/"
axios.defaults.baseURL= "https://kk-enterprises.herokuapp.com/"
axios.defaults.headers.post["Content-Type"] = "application/json";    //x-www-form-urlencoded
root.render(
  
  <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
        <App />
        </Provider>
    </ChakraProvider>
      </BrowserRouter>
);


