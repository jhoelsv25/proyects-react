import { Filters } from "../components/Filters"

// eslint-disable-next-line react/prop-types
export const Header = () => {
    //console.log(filter);
    return (
        <header>
            <h1>React Shop</h1>
            <Filters />
        </header>
    )
}
