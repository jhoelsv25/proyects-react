import { useState, createContext, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [subtotal, setSubTotal] = useState(0);

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
    const totalPrice = (product) => {
        const priceTotal = cart.filter(item => item.quantity > 0).reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)
        setTotal(priceTotal)
    }
    const subTotalPrice = () => {
        const priceSubTotal = cart.filter(item => item.quantity > 0).reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)
        setSubTotal(priceSubTotal)
    }

    useEffect(() => {
        totalPrice()
        subTotalPrice()

    }, [cart])
    return (
        <CartContext.Provider value={{
            cart, addToCart, removeCart, total, subtotal
        }}>
            {children}
        </CartContext.Provider>
    )
}
