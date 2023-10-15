
import { NavLink } from "react-router-dom";

export const Nav = () => {
    const actived = ({ isActive, isPending }) => {
        return isPending ? 'text-gray-400' : isActive ? 'text-blue-500' : ''
    }
    return (
        <nav className="flex justify-between items-center  font-medium ">

            <ul className="flex gap-5 ">
                <li className="hover:text-blue-500">
                    <NavLink to='/' className={({ isActive, isPending }) => actived({ isActive, isPending })}>Home</NavLink>
                </li>
                <li className="hover:text-blue-500">
                    <NavLink to='/categories' className={({ isActive, isPending }) => actived({ isActive, isPending })} >Categories</NavLink>
                </li>
                <li className="hover:text-blue-500">
                    <NavLink to='/products' className={({ isActive, isPending }) => actived({ isActive, isPending })} >Products</NavLink>
                </li>
                <li className="hover:text-blue-500">
                    <a href="">Blog</a>

                </li>
                <li className="hover:text-blue-500">
                    <a href="">About</a>

                </li>
                <li className="hover:text-blue-500">
                    <a href="">Contact</a>
                </li>
            </ul>

            <a href="" className="hover:text-blue-500">Special Offters</a>
        </nav >
    )
}
