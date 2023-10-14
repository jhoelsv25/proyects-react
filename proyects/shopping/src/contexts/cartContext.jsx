import { useState, createContext } from 'react'


export const CartContext = createContext()


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const exist = cart.find(item => item.id === product.id);
        if (exist) {
            const newCart = [...cart];
            newCart[newCart.indexOf(exist)].quantity += 1;
            return setCart(newCart);
        }
        setCart(prevState => [
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ])
    }
    const removeCart = (cart) => {
        setCart(prevState => prevState.filter(item => item.id !== cart.id))
    }
    const updateQuantity = (cart, quantity) => {

    }

    return (
        <CartContext.Provider value={{
            cart, addToCart, removeCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
