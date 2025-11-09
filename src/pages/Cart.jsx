import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, addToCart, removeFromCart, total } = useContext(CartContext);

    const handleIncrease = (pizza) => {
        addToCart(pizza);
    };

    const handleDecrease = (pizzaId) => {
        removeFromCart(pizzaId);
    };

    return (
        <div className="container mt-5" style={{ color: 'var(--text-color)' }}>
            <h2 className="mb-4">Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <>
                    <div className="row">
                        {cart.map((pizza) => (
                            <div key={pizza.id} className="col-md-6 col-lg-4">
                                <div className="card mb-4" style={{ backgroundColor: 'var(--cream-light)', color: 'var(--text-color)' }}>
                                    <img src={pizza.img} alt={pizza.name} className="card-img-top img-fluid" />
                                    <div className="card-body">
                                        <h5 className="card-title">{pizza.name}</h5>
                                        <p className="card-text">Precio: ${pizza.price.toLocaleString()}</p>
                                        <p className="card-text">Cantidad: {pizza.quantity}</p>
                                        <div className="d-flex">
                                            <button
                                                className="btn me-2"
                                                style={{ backgroundColor: 'var(--pastel-pink)', color: 'var(--text-color)' }}
                                                onClick={() => handleDecrease(pizza.id)}
                                            >
                                                -
                                            </button>
                                            <button
                                                className="btn me-2"
                                                style={{ backgroundColor: 'var(--pastel-pink)', color: 'var(--text-color)' }}
                                                onClick={() => handleIncrease(pizza)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h3>Total: ${total.toLocaleString()}</h3>
                    <button className="btn" style={{ backgroundColor: 'var(--pastel-pink)', color: 'var(--text-color)' }}>Pagar</button>
                </>
            )}
        </div>
    );
};

export default Cart;
