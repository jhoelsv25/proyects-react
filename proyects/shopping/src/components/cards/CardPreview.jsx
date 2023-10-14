
import { useCart } from "../../hooks/useCart"
import { IconXmark } from "../../icons/Icons"

export const CardPreview = () => {

    const { cart, removeCart, addToCart } = useCart()
    console.log(cart);
    return (
        <ul className='flex flex-col '>
            {
                cart.map(product => {
                    return (
                        <li key={product.id} className='p-3 flex gap-5 relative group'>
                            <img src={product.thumbnail} className='w-[150px]' alt={product.title} />
                            <div className='grid place-content-around'>
                                <div className="flex flex-col justify-between gap-5">
                                    <h1 className='font-bold text-gray-700'>{product.title.slice(0, 15)}</h1>
                                    <p className='font-bold text-xl font-mono'>${product.price}.00</p>
                                </div>
                                <span onClick={() => { removeCart(product) }} className='h-6 w-6 absolute hidden right-1 top-1 rounded-full border hover:scale-125 hover:fill-blue-500 text-white group-hover:flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out'>
                                    <IconXmark />
                                </span>
                                <footer className='flex gap-3 items-center'>
                                    <label htmlFor="23659" className="font-bold">qty:</label>
                                    <button className='border text-xl rounded-lg h-8 w-auto px-3 font-bold text-black hover:bg-gray-300'>-</button>
                                    <strong>{product.quantity}</strong>
                                    <button className='border text-xl rounded-lg h-8 w-auto px-3 font-bold text-black hover:bg-gray-300' onClick={() => { addToCart(product) }}>+</button>
                                </footer>
                            </div>

                        </li>
                    )
                })
            }

        </ul>
    )
}
