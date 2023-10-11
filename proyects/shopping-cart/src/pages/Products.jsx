/* eslint-disable react/prop-types */
import { AddToCartIcon } from "../icons/Icons"
import "./Products.css"
export const Products = ({ products }) => {
    return (
        <main className="products">
            <ul>
                {
                    products.slice(0, 10).map(product => {
                        return (
                            <li key={product.id}>
                                <img src={product.thumbnail} width={200} height={150} loading="lazy" alt={product.title} />
                                <div>
                                    <strong>{product.title} -  $ {product.price}</strong>
                                </div>
                                <button>
                                    <AddToCartIcon />
                                </button>
                            </li>
                        )
                    })
                }
            </ul>

        </main>
    )
}
