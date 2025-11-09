import React from 'react';
import { Link } from 'react-router-dom';

const CardPizza = ({ id, name, price, ingredients, img, onAddToCart }) => {
    return (
        <div className="card" style={{ width: "22rem", padding: "10px", margin: "22px", marginTop: "50px", backgroundColor: 'var(--cream-light)', color: 'var(--text-color)' }}>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <p className="card-text">Precio: ${price.toLocaleString()}</p>
                <Link to={`/pizza/${id}`}>
                    <button className="btn btn-outline-warning me-4" style={{ borderWidth: '2px', borderColor: 'var(--pastel-pink)', color: 'var(--text-color)' }}>Ver más</button>
                </Link>
                <button className="btn" style={{ backgroundColor: 'var(--pastel-pink)', color: 'var(--text-color)' }} onClick={onAddToCart}>Añadir</button>
            </div>
        </div>
    );
};

export default CardPizza;
