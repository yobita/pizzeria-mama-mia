import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addToCart = (pizza) => {
        const existingItem = cart.find((item) => item.id === pizza.id);
        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCart([...cart, { ...pizza, quantity: 1 }]);
        }
    };

    const removeFromCart = (pizzaId) => {
        const existingItem = cart.find((item) => item.id === pizzaId);
        if (existingItem.quantity === 1) {
            setCart(cart.filter((item) => item.id !== pizzaId));
        } else {
            setCart(
                cart.map((item) =>
                    item.id === pizzaId ? { ...item, quantity: item.quantity - 1 } : item
                )
            );
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    useEffect(() => {
        const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(newTotal);
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
