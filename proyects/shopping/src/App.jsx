import React from 'react'
import { HeaderPage } from './pages/HeaderPage'
import { HomePage } from './routes/HomePage'
import { Header } from './pages/Header'



export const App = () => {
  return (

    <main className='w-full' >
      <header className=' border-b'>
        <Header />
      </header>
      <section className='bg-white sticky top-0 z-50'>
        <HeaderPage></HeaderPage>
      </section>
      <HomePage></HomePage>
    </main>
  )
}
