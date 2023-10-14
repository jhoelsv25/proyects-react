import { Routes, Route } from 'react-router-dom';
import React from 'react'
import { HeaderPage } from './pages/HeaderPage'
import { HomePage } from './routes/HomePage'
import { Header } from './pages/Header'
import { ProductPage } from './routes/ProductPage'
import { CategoryPage } from './routes/CategoryPage';
import { CartPage } from './routes/CartPage';
import { ViewListProvider } from './contexts/viewContext';
import { CartProvider } from './contexts/cartContext';


export const App = () => {
  return (
    <CartProvider>
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
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </main>
      </ViewListProvider>
    </CartProvider>
  )
}
