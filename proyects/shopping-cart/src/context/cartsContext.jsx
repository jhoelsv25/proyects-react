import { createContext, useState } from 'react';


// eslint-disable-next-line react-hooks/rules-of-hooks
export const CartContext = createContext();


// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        const productIndex = cart.findIndex(item => item.id === product.id);
        if (productIndex >= 0) {
            const newCart = structuredClone(cart);
            newCart[productIndex].quantity += 1;
            return setCart(newCart);
        }
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]
        ));
    }
    const removeCart = (cart) => {
        setCart(prevState => prevState.filter(item => item.id !== cart.id))
    }
    return (
        <CartContext.Provider value={{
            cart,
            removeCart,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}