import React from 'react'
import { FilterProduct } from '../components/FilterProduct'
import ImageTitle from "../assets/page-title-bar1.jpg"
import { useViewList } from '../hooks/useViewList'

export const CategoryPage = () => {

    const { view } = useViewList();

    return (
        <>
            <section className="w-full relative">
                <img src={ImageTitle} alt="Imagen " />
                <h1 className="font-bold text-white text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Nombre de catogry</h1>
            </section>
            <section className='max-w-[1200px] mx-auto max-lg:px-5  bg-white mt-5'>
                <FilterProduct />

            </section>
        </>
    )
}
