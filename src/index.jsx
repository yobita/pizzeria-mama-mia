import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import PizzasProvider from './context/PizzasContext.jsx';
import CartProvider from './context/CartContext.jsx';
import UserProvider from './context/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzasProvider>
        <CartProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </CartProvider>
      </PizzasProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
