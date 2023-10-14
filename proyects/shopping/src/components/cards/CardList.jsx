import { IconHeart, IconHeartFill } from '../../icons/Icons'
import { useFavorite } from '../../hooks/useFavorite'
import { useFilter } from '../../hooks/useFilter'
import { useCart } from '../../hooks/useCart'
export const CardList = () => {
    const { favorite, setFavorite } = useFavorite()
    const { products } = useFilter()
    const { addToCart } = useCart()
    return (
        <ul className='flex flex-col '>
            {
                products.map(res => {
                    return (
                        <li key={res.id} className='p-3 flex gap-5 shadow-lg'>
                            <img src={res.thumbnail} loading='lazy' className='w-[250px] h-[250px] object-cover' alt={res.title} />
                            <div className='grid place-content-around'>
                                <div>
                                    <small className='text-sm text-gray-400'>{res.category}</small>
                                    <h1 className='font-bold '>{res.title}</h1>
                                    <p className='font-bold text-xl font-mono'>${res.price}.00</p>
                                    <span>
                                        ⭐⭐⭐⭐⭐
                                    </span>
                                </div>

                                <p className='xl:pr-5'>{res.description}</p>
                                <footer className='flex gap-5'>

                                    <button className='bg-blue-500 rounded-sm h-10 w-32 font-bold text-white hover:bg-blue-600' onClick={() => { addToCart(res) }} >add to cart</button>
                                    <button className='fill-blue-500' onDoubleClick={() => setFavorite(!favorite)}>

                                        {favorite ? <IconHeartFill /> : <IconHeart height='1.8em' fill='gray' />}
                                    </button>
                                </footer>
                            </div>

                        </li>
                    )
                })
            }


        </ul>
    )
}
