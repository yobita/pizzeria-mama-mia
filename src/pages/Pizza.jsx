import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PizzasContext } from '../context/PizzasContext';
import { CartContext } from '../context/CartContext';

const Pizza = () => {
    const { id } = useParams();
    const { pizzas } = useContext(PizzasContext);
    const { addToCart } = useContext(CartContext);
    const [pizza, setPizza] = useState(null);

    useEffect(() => {
        if (pizzas.length > 0) {
            const foundPizza = pizzas.find((p) => p.id === id);
            setPizza(foundPizza);
        }
    }, [pizzas, id]);

    if (!pizza) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5" style={{ color: 'var(--text-color)' }}>
            <div className="row">
                <div className="col-md-6">
                    <img src={pizza.img} alt={pizza.name} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2>{pizza.name}</h2>
                    <p>{pizza.desc}</p>
                    <h4>Ingredientes:</h4>
                    <ul>
                        {pizza.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h3>Precio: ${pizza.price.toLocaleString('es-CL')}</h3>
                    <button className="btn me-2" style={{ backgroundColor: 'var(--pastel-pink)', color: 'var(--text-color)' }} onClick={() => addToCart(pizza)}>Añadir al carrito</button>
                    <Link to="/">
                        <button className="btn border" style={{ borderColor: 'var(--pastel-pink)', color: 'var(--text-color)' }}>Volver</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Pizza;
