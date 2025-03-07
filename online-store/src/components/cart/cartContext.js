import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const initialCartValue = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(initialCartValue);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    }

    const removeFromCart = (productId) => {
        setCart((prevCart) => 
            prevCart
                .map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
    )};

    const removeItem = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    }

    const clearCart = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);    

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook

export const useCart = () => {
    return useContext(CartContext);
};
