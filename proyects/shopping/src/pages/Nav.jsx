

export const Nav = () => {
    return (
        <nav className="flex justify-between items-center  font-medium ">

            <ul className="flex gap-5 ">
                <li className="hover:text-blue-500">
                    <a href="">Home</a>
                </li>
                <li className="hover:text-blue-500">
                    <a href="">Categories</a>
                </li>
                <li className="hover:text-blue-500">
                    <a href="">Products</a>
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
        </nav>
    )
}
