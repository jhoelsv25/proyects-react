import { Products } from "./pages/Products"
import { useFilters } from './hooks/useFilters'
import { products as initialProduct } from "./mocks/products.json"
import { Header } from "./pages/Header";
import { Footer } from "./pages/Footer";
import { Cart } from "./pages/Cart";




export const App = () => {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProduct);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
      <Cart />
    </>
  )
}
