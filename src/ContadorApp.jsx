import { useState } from "react"
import  './Styles/ContadorApp.css'


export const ContadorApp = ({ value }) => {
    const [contador, setContador] = useState(value)
    const handleclick = () => {
        setContador (contador + 1)
    }
    return (
        <>
            <h1>Contador:</h1>
            <p>{contador}</p>
            <button onClick={handleclick}>Clickeame</button>

        </>
    )
}
