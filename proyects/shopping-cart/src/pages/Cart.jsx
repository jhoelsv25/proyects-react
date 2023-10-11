import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../icons/Icons'
import './Cart.css'
export const Cart = () => {
    const cartCheckboxId = useId()
    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    <li>
                        <img src="https://i.dummyjson.com/data/products/30/thumbnail.jpg" alt="iamge" />
                    </li>
                    <div>
                        <strong>iphone</strong>
                    </div>
                </ul>

                <button >
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}
