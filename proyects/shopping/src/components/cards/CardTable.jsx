
import { IconXmark } from "../../icons/Icons"
export const CardTable = ({ addToCart, cart, removeCart }) => {

    return (
        <table className=''>
            <thead>
                <tr className=' pb-2 uppercase text-gray-400 border-b'>
                    <th className='flex-1 text-start'>product</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>subtotal</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map(product => {
                        return (
                            <tr key={product.id} className='text-center h-24'>
                                <td>
                                    <img className='h-20 w-20 rounded-md' src={product.thumbnail} alt={product.title} />
                                </td>
                                <td>
                                    <p className='font-bold'>${product.price}.00</p>
                                </td>
                                <td>
                                    <span className='flex justify-center'>
                                        <button className=' border w-5 p-2  flex items-center justify-center font-bold' >
                                            -
                                        </button>
                                        <input type="number" className='border-y w-14 p-2 font-bold' value={product.quantity} max='100' />
                                        <button className=' border w-5 p-2 flex items-center justify-center font-bold' >
                                            +
                                        </button>
                                    </span>
                                </td>
                                <td>
                                    <p className='font-bold '>${product.price * product.quantity}.00</p>
                                </td>
                                <td>
                                    <span onClick={() => removeCart(product)} className='h-6 w-6 rounded-full border hover:scale-125 hover:fill-blue-500 text-white flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out'>
                                        <IconXmark />
                                    </span>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
