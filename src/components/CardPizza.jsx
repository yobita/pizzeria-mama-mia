import React from 'react';
import { Link } from 'react-router-dom';

const CardPizza = ({ id, name, price, ingredients, img, onAddToCart }) => {
    return (
        <div className="card" style={{ width: "22rem", padding: "10px", margin: "22px", marginTop: "50px" }}>
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
                    <button className="btn btn-outline-dark me-4" style={{ borderWidth: '2px' }}>Ver más</button>
                </Link>
                <button className="btn btn-dark" onClick={onAddToCart}>Añadir</button> 
            </div>
        </div>
    );
};

export default CardPizza;
