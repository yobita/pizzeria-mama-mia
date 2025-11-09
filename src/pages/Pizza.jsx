import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Pizza = () => {
    const [pizza, setPizza] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
                const data = await response.json();
                setPizza(data);
            } catch (error) {
                console.error("Error fetching pizza:", error);
            }
        };

        if (id) {
            fetchPizza();
        }
    }, [id]);

    if (!pizza) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
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
                    <button className="btn btn-danger me-2">Añadir al carrito</button>
                    <Link to="/">
                        <button className="btn btn-outline-primary">Volver</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Pizza;
