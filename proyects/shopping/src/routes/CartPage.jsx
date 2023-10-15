
import { IconGreater, } from '../icons/Icons'
import { NavLink, Outlet } from 'react-router-dom'



export const CartPage = () => {
    const actived = ({ isActive, isPending }) => {
        return isPending ? 'text-gray-400' : isActive ? 'text-blue-500' : ''
    }
    return (
        <section className='max-w-[1200px] mx-auto max-lg:px-5  bg-white'>
            <nav className='uppercase font-bold flex justify-center items-center text-gray-500 gap-3 text-xl'>
                <h1 className='hover:text-blue-500 '> <NavLink to='shopping-cart' className={({ isActive, isPending }) => actived({ isActive, isPending })}>1. shopping cart</NavLink></h1>
                <h1 className='text-xl fill-gray-300'>
                    <IconGreater />
                </h1>
                <h1 className='hover:text-blue-500'><NavLink to='checkout' className={({ isActive, isPending }) => actived({ isActive, isPending })}>2. checkout</NavLink> </h1>
                <h1 className='text-xl fill-gray-300'>
                    <IconGreater />
                </h1>
                <h1 className='hover:text-blue-500'> <NavLink to='order-complete' className={({ isActive, isPending }) => actived({ isActive, isPending })}>3. order complete</NavLink></h1>
            </nav>
            <Outlet />

        </section>
    )
}

