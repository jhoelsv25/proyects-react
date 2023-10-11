import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../icons/Icons'
import './Cart.css'
import { useCart } from '../hooks/useCart';
export const Cart = () => {
    const cartCheckboxId = useId();
    const { cart, removeCart, addToCart } = useCart()

    const qtyChange = ({ cart }) => {
        if (cart.stock <= cart.quantity) return alert('no hay mas stock')
        addToCart({ ...cart, quantity: cart.quantity + 1 })
    }

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    {
                        cart.map(cart => {
                            return (
                                <li key={cart.id}>
                                    <img src={cart.images[0]} alt={cart.title} />
                                    <div>
                                        <strong>
                                            {cart.title} - ${cart.price}
                                        </strong>

                                    </div>
                                    <small> cantidad: {cart.quantity} <button onClick={() => qtyChange({ cart })}>+</button>
                                    </small>
                                    <footer>
                                        <button onClick={() => removeCart(cart)} >
                                            <ClearCartIcon />
                                        </button>
                                    </footer>
                                </li>
                            )
                        })
                    }
                </ul>
            </aside>
        </>
    )
}
