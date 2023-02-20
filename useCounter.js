import { useState } from "react"


export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue );

    const increment = ( value = 1 ) => {
        setCounter((current) => current + value);
    }

    const decrement = ( value = 1) => {
        //if ( counter === 0 ) return; //queremos q no haya negativos (como si fuera un carrito de la compra)
        //De esta forma tenemos la logica de negocio aquí y nuestro function component es lo mas simple posible
        setCounter((current) => current - value);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return{
        counter,
        increment,
        decrement,
        reset
    }

}