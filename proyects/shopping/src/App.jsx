import { Routes, Route } from 'react-router-dom';
import React from 'react'
import { HeaderPage } from './pages/HeaderPage'
import { HomePage } from './routes/HomePage'
import { Header } from './pages/Header'
import { ProductPage } from './routes/ProductPage'
import { CategoryPage } from './routes/CategoryPage';
import { CartPage } from './routes/CartPage';
import { ViewListProvider } from './contexts/viewContext';
import { FilterProvider } from './contexts/filterContext';
import { ShoppingCart } from './routes/ShoppingCart';


export const App = () => {


  return (

    <FilterProvider>
      <ViewListProvider>
        <main className='w-full' >
          <header className=' border-b'>
            <Header />
          </header>
          <section className='bg-white sticky top-0 z-50'>
            <HeaderPage></HeaderPage>
          </section>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path='/cart' element={<CartPage />} >
              <Route path='shopping-cart' element={<ShoppingCart />} />
              <Route path='checkout' element={<h1>chekoot </h1>} />
              <Route path='order-complete' element={<h1>complete </h1>} />
            </Route>
          </Routes>
        </main>
      </ViewListProvider>
    </FilterProvider>
  )
}
