import { FilterProduct } from "../components/FilterProduct"
import { Link } from "react-router-dom"
import ImageTitle from "../assets/page-title-bar1.jpg"
import { CardGrid } from "../components/cards/CardGrid"
import { CardList } from "../components/cards/CardList"
import { useViewList } from "../hooks/useViewList"
import { useCategory } from "../hooks/useCategory"
import { useFilter } from "../hooks/useFilter"
export const ProductPage = () => {
    const { view } = useViewList();
    const { categories, error } = useCategory()
    const { products } = useFilter()
    console.log('product page', products);

    return (
        <>
            <section className="w-full relative">
                <img src={ImageTitle} alt="Imagen " />
                <h1 className="font-bold text-white text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">ALL PRODUCTS</h1>
            </section>
            <section className="max-w-[1200px] mx-auto max-lg:px-5  bg-white">
                <FilterProduct />
                <div className="flex gap-5 mt-5">
                    <aside className="w-1/4 max-lg:hidden">
                        <h2 className="font-bold text-xl">Product Categories</h2>
                        <ul className="w-full text-gray-400 font-normal flex flex-col border-t ">
                            {
                                categories.map((cat, index) => {
                                    return (
                                        <li key={index} className="hover:text-blue-500 hover:underline py-1 px-3 border-x border-b">
                                            <Link to="/product/1">{cat}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </aside>
                    <div className="w-full flex flex-col">

                        <div className="mt-5 w-full">
                            {
                                view === 'grid' ? <CardGrid data={products} /> : <CardList data={products} />
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
