import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { total } = useContext(CartContext);
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'var(--cream-dark)' }}>
      <Link className="navbar-brand ms-3" to="/" style={{ color: 'var(--text-color)' }}>Pizzería Mamma Mía</Link>
      
      <button 
        className="navbar-toggler me-2" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarContent" 
        aria-controls="navbarContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        style={{ borderColor: 'var(--pastel-pink)' }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <div className="d-flex flex-column flex-lg-row">
          <Link to="/" className="btn me-2 border" style={{ color: 'var(--text-color)', borderColor: 'var(--pastel-pink)' }}>🍕 Home</Link>
          {token ? (
            <>
              <Link to="/profile" className="btn me-2 border" style={{ color: 'var(--text-color)', borderColor: 'var(--pastel-pink)' }}>🔓 Profile</Link>
              <button className="btn me-2 border" style={{ color: 'var(--text-color)', borderColor: 'var(--pastel-pink)' }}>🔒 Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn me-2 border" style={{ color: 'var(--text-color)', borderColor: 'var(--pastel-pink)' }}>🔐 Login</Link>
              <Link to="/register" className="btn me-2 border" style={{ color: 'var(--text-color)', borderColor: 'var(--pastel-pink)' }}>🔐 Register</Link>
            </>
          )}
        </div>
        <div className="ms-auto mt-2 mt-lg-0">
          <Link to="/cart" className="btn border me-3" style={{ color: 'var(--text-color)', borderColor: 'var(--pastel-pink)' }}>
            🛒 Total: ${total.toLocaleString()}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
