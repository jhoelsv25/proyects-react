

export const CartPreview = ({ setActived }) => {

    return (
        <>
            <div className="bg-black w-screen fixed opacity-50 h-screen z-10 top-0 bottom-0 left-0 right-0 pointer-events-none transition-transform"></div>
            <section
                className="fixed min-w-[350px] top-0 right-0 bottom-0 h-full bg-gray-50 px-5 z-30">
                <div className="flex justify-between w-full h-20 items-center px-5 border-b">
                    <strong className="text-lg uppercase font-bold">shopping cart</strong>
                    <button className="text-sm uppercase text-gray-500 font-bold hover:text-blue-500" onClick={() => setActived(false)}>
                        close
                    </button>
                </div>
            </section>
        </>
    )
}
