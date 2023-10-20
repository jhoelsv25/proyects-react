import { useState, useEffect } from "react";

export const Greeting = () => {
    const currentDate = new Date();
    const [greeting, setGreeting] = useState('');
    const hour = currentDate.getHours();

    useEffect(() => {
        if (hour < 12) {
            setGreeting("Buenos días");
        } else if (hour < 18) {
            setGreeting('Buenas tardes');
        } else {
            setGreeting('Buenas noches');
        }
    }, []); // El arreglo vacío [] asegura que el efecto se ejecute solo una vez al montar el componente.

    return (
        <h1 className="text-3xl font-bold">{greeting}</h1>
    )
}
