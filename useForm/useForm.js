import { useState } from "react";


export const useForm = ( initialForm = {} ) => {

    const [formState, setformState] = useState( initialForm );


    const onInputChange = ({target}) => {
        //////////////////////////////////CLAVE//////////////////////////////
        //console.log(event.target.value) //nuevo valor del objeto
        //console.log(event.target.name) //nombre del objeto q ha cambiado
        /////////////////////////////////////////////////////////////////////
        const {name, value} = target;
        //llaves pq el formState es un objeto (con dos propiedades: usename y email)
        setformState({
            ...formState, //esparcimos todas las propiedades (por si hubiera varias, en este caso hay 2)
            [name]: value //cambiamos el valor de la propiedad q ha cambiado (username o email)

        });
  
    }

    const onResetForm = () => {

        setformState(initialForm);

    }




    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
