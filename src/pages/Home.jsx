import React, { useContext } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { PizzasContext } from '../context/PizzasContext';
import { CartContext } from '../context/CartContext';

const Home = () => {
    const { pizzas } = useContext(PizzasContext);
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <Header />
            <div className="container mt-4">
                <div className="row">
                    {pizzas.map((pizza) => (
                        <div key={pizza.id} className="col-md-4 d-flex justify-content-center mb-4">
                            <CardPizza
                                id={pizza.id}
                                name={pizza.name}
                                price={pizza.price}
                                ingredients={pizza.ingredients}
                                img={pizza.img}
                                onAddToCart={() => addToCart(pizza)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
