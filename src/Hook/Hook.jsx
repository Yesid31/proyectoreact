import { useState,useEffect } from "react"
export function Hook(){
    //Antes Del Retorno Configuramos Nuestras Variables De Estado 0 es como queremos que empiece,setcontador para modificarlo
    const [contador,setContador]=useState(0)

    //Programando el detector de ejecuciones 
    useEffect(function(){
        setContador(contador+1)
    },[])

 
    // Funcion Para Decir Que Hacer Cunaod Le De Click Al Boton
    function incremetarCuenta (){
        setContador(contador+1)
    }


    return (
        <>
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-primary" onClick={incremetarCuenta}>clic</button>
                    <h2>La cuenta va en:{contador} </h2>
                </div>

            </div>
        </div>
     
        </>
    )
}