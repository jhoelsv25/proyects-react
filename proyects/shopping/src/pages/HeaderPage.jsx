import { useState } from 'react'
import { Search } from '../components/Search'
import { IconBag, IconBars, IconCall, IconHeart } from '../icons/Icons'
import { Nav } from './Nav'
import { CartPreview } from '../components/CartPreview'
import { useCart } from '../hooks/useCart'
export const Info = ({ setActived }) => {
    const { cart, total } = useCart()

    return (
        <section className='flex gap-3'>
            <div className='flex gap-3 items-center group hover:text-blue-500 cursor-pointer'>
                <IconCall />
                <span className='flex flex-col max-lg:hidden '>
                    <small className='text-sm text-gray-800 group-hover:text-blue-500'>Call us now:</small>
                    <h1 className='font-bold'>918506768</h1>
                </span>
            </div>
            <div className="flex gap-2 items-center border-r border-l px-3 my-2 cursor-pointer max-sm:hidden">
                <IconHeart />
            </div>

            <div className="flex gap-3 items-center">
                <span className='flex flex-col max-lg:hidden group hover:text-blue-500 cursor-pointer'>
                    <small className='text-sm text-gray-800 group-hover:text-blue-500'> Shopping cart:</small>
                    <h1 className='font-bold'>$ {total}</h1>
                </span>
                <button className='relatve flex justify-end cursor-pointer ' onClick={() => setActived(true)}>
                    <IconBag />
                    <i className='bg-blue-500 absolute  top-10 rounded-full h-5 w-5 flex items-center justify-center'>
                        <small className='text-xs font-medium text-white'>{cart.length}</small>
                    </i>
                </button>
            </div>
        </section>
    )
}


export const HeaderPage = () => {
    const [actived, setActived] = useState(false);
    return (
        <>
            <div className='flex justify-between h-32 items-center gap-7 max-w-[1200px] mx-auto max-lg:px-5  bg-white'>
                <div className=' flex gap-5 w-auto items-center'>
                    <nav className='lg:hidden block'>
                        <IconBars />
                    </nav>
                    <img src='https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/12/logo.png' className='w-44 max-md:w-36 ' alt="Logo de la pagina " />
                </div>

                <div className=' xl:w-1/2 w-auto  max-md:hidden'>
                    <Search></Search>
                </div>
                <div >
                    <Info setActived={setActived} actived={actived} />
                </div>
            </div>

            <section className='pb-5 max-lg:hidden max-w-[1200px] mx-auto max-lg:px-'>
                <Nav />
            </section>
            {
                actived && <CartPreview setActived={setActived} actived={actived} />
            }

        </>

    )
}
