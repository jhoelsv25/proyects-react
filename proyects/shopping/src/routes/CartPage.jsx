import { useState } from 'react'
import { IconGreater, IconXmark } from '../icons/Icons'
import { Link, NavLink } from 'react-router-dom'
import { CardTable } from '../components/cards/CardTable'
import { useCart } from '../hooks/useCart'

export const CartPage = () => {
    const { addToCart, cart, removeCart } = useCart()
    const [total, setTotal] = useState()
    const subTotal = () => {

    }


    return (
        <section className='max-w-[1200px] mx-auto max-lg:px-5  bg-white'>
            <nav className='uppercase font-bold flex justify-center items-center text-gray-500 gap-3 text-xl'>
                <h1 className='hover:text-blue-500 '> <NavLink>1. shopping cart</NavLink></h1>
                <h1 className='text-xl fill-gray-300'>
                    <IconGreater />
                </h1>
                <h1 className='hover:text-blue-500'><NavLink>2. checkout</NavLink> </h1>
                <h1 className='text-xl fill-gray-300'>
                    <IconGreater />
                </h1>
                <h1 className='hover:text-blue-500'> <NavLink>3. order complete</NavLink></h1>
            </nav>
            <article className='flex  gap-5 mt-5 w-full justify-between'>
                <section className='flex flex-col w-3/5'>
                    <CardTable addToCart={addToCart} removeCart={removeCart} cart={cart} />
                    <footer className='flex justify-between mt-10'>
                        <button className='h-10 bg-black text-white px-3 uppercase font-semibold py-1 hover:opacity-80'>
                            <Link to='/products'>continue shopping</Link>
                        </button>
                        <button className='h-10 border-2 text-gray-400 px-3 uppercase font-semibold py-1 hover:border-black hover:text-white hover:bg-black'>
                            update cart
                        </button>

                    </footer>
                </section>
                <aside className='w-1/3  border px-5 py-6 flex flex-col gap-5 sticky top-44 h-64'>
                    <h1 className='uppercase font-bold text-xl border-b pb-5'>carts totals</h1>
                    <strong className='flex justify-between items-center'>
                        <h2>SubTotal</h2>
                        <p className='text-gray-600'>${cart.filter(item => item.quantity > 0).reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</p>
                    </strong>
                    <strong className='flex justify-between items-center'>
                        <h2>Total</h2>
                        <p>${cart.filter(item => item.quantity > 0).reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</p>
                    </strong>
                    <button className='uppercase text-white font-bold  text-lg xl:h-12 h-10 bg-black hover:opacity-80'>
                        <Link > proced to check </Link>
                    </button>
                </aside>
            </article>
        </section>
    )
}

