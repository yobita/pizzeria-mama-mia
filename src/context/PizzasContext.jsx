import { createContext, useState, useEffect } from "react";

export const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);

    const getPizzas = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/pizzas');
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setPizzas(data);
        } catch (error) {
            console.error("Error fetching pizzas:", error);
        }
    };

    useEffect(() => {
        getPizzas();
    }, []);

    return (
        <PizzasContext.Provider value={{ pizzas }}>
            {children}
        </PizzasContext.Provider>
    );
};

export default PizzasProvider;
