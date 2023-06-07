import axios from "axios";
export async function consultarConAxios(){
    //URI URL+EP DEL SERVIVIO
    const IDARTISTA = "1dKdetem2xEmjgvyymzytS";
    const URI=`https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`
    const TOKEN =
    "Bearer BQAQxEPuHDItoBAQ2F0ow45JEcnClEkg6ZuZtPoxXvKg9y-iTORAo8qR-T-bThPVRwTc3giEByjy2BcuRZuvSjvUkv7PlZYQing0syTHGThgv_sPYao";

    //Construyo la peticion
    const PETICION= {
  
        headers:{"Authorization":TOKEN
    }

        
    }
    
    //ORDENAR MI RESPUESTA 
try{
    //UTILIZAMOS LA PROMESA ENCARGADA DE CONSUMIR EL API
    let respuesta=await axios.get(URI,PETICION)
    let canciones=respuesta.data
    //SIEMPRE ES DATA CUANDO SE TRARA DE AXIOS
    return canciones 


}
catch(error){
    throw new Error ("upsss fallamos"+error)
}
}