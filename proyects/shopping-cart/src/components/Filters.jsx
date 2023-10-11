/* eslint-disable react/prop-types */
import { FiltersContext } from '../context/filters';
import './Filters.css'
import { useContext, useId } from 'react'
export const Filters = () => {
    const minpriceFilterId = useId();
    const categoryFilterId = useId();
    const { filters, setFilters } = useContext(FiltersContext)

    const selectedFilter = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))

    }
    const valueRange = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor={minpriceFilterId}>Price</label>
                <input type="range" id={minpriceFilterId} onChange={valueRange} min={filters.minPrice} max={1000} />
                <span> $ {filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select name="" id={categoryFilterId} onChange={selectedFilter}>
                    <option value="all">Todas </option>
                    <option value="smartphones">Smartphones</option>
                    <option value="laptops">Laptops</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="skincare">Skincare</option>
                    <option value="groceries">Groceries</option>
                    <option value="home-decoration">Home Decoration</option>
                    <option value="beauty">Beauty</option>
                </select>
            </div>

        </section>
    )
}
