
import { CardPreview } from './cards/CardPreview'
import { Link } from 'react-router-dom'
export const CartPreview = ({ setActived }) => {

    return (
        <>
            <div className="bg-black w-screen fixed opacity-50 h-screen z-10 top-0 bottom-0 left-0 right-0 pointer-events-none transition-transform"></div>
            <section className="fixed min-w-[350px] max-w-[500px] top-0 right-0 bottom-0 h-full bg-gray-50 px-5 z-30 overflow-y-auto">
                <div className="flex justify-between w-full h-20 items-center px-5 border-b">
                    <strong className="text-lg uppercase font-bold">shopping cart</strong>
                    <button className="text-sm uppercase text-gray-500 font-bold hover:text-blue-500" onClick={() => setActived(false)}>
                        close
                    </button>
                </div>
                <CardPreview />

                <div className="flex flex-col justify-center w-full border-t sticky bottom-0 bg-gray-50 z-30 py-2">
                    <Link to='/cart/shopping-cart' onClick={() => setActived(false)} className="text-center text-gray-400 hover:text-blue-500 underline">
                        View cart
                    </Link>
                    <button className="bg-black text-white uppercase font-bold py-3 px-4 rounded-md mt-2 hover:opacity-80 transition-colors">
                        go to checkout
                    </button>
                </div>
            </section>
        </>
    )
}
