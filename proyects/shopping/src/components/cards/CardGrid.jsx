import { useCart } from '../../hooks/useCart'
import { useFavorite } from '../../hooks/useFavorite'
import { IconHeart, IconHeartFill } from '../../icons/Icons'

export const CardGrid = ({ data }) => {
    const { favorite, setFavorite } = useFavorite()
    const { cart, addToCart } = useCart()

    return (
        <div >
            <ul className='flex flex-wrap gap-2'>
                {
                    data.map(res => {
                        return (
                            <li key={res.id} className='bg-white p-2 shadow-lg flex flex-col gap-2'>
                                <a href="#" className='rounded-md'>
                                    <img src={res.thumbnail} className='w-[200px] h-[200px] object-fill rounded-md' alt={res.title} loading='lazy' />
                                </a>
                                <div className='flex flex-col'>
                                    <small className='text-sm text-gray-400 flex gap-2 items-center justify-between  font-mono'>
                                        {res.category}
                                        <button className='fill-blue-500' onDoubleClick={() => setFavorite(!favorite)}>
                                            {favorite ? <IconHeartFill height='1.2em' /> : <IconHeart height='1.2em' fill='gray' />}
                                        </button>
                                    </small>
                                    <strong className='flex w-full'>{res.title.slice(0, 20)}</strong>
                                </div>
                                <button onClick={() => addToCart(res)} className='bg-white group h-10 hover:bg-blue-500 cursor-pointer flex rounded-sm justify-center items-center hover:transition-colors'>
                                    <h1 className='font-bold text-lg group-hover:hidden transition-colors text-blue-500'>$ {res.price}.00</h1>
                                    <span className='group-hover:text-white font-bold hidden  transition-colors group-hover:block'  >
                                        Add to cart
                                    </span>
                                </button>
                            </li>
                        )
                    })
                }


            </ul>
        </div>
    )
}
