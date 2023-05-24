export async function consultarCanciones() {
  //RECETA PARA CONSUMIR APIS CON JS

  //1.PA' ONDE VAS OME
  //URL+EP DEL SERVICIO
  const IDARTISTA = "1dKdetem2xEmjgvyymzytS";
  const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`;
  const TOKEN =
    "Bearer BQD7ywNWDGJM8SY_r4hgqg9D9qQ4XSiZBAFqD3iM6O4qkbS0bBYNVad2gE04w8AHNzLBoRaT-HIIpRGoUEcx2JOT7wxE09I5dewNVeOk1-oWwC2adek";

 //2.QUE VAS A HACE ALLA OME....
 //Configuro La Peticion
 let peticion ={
    method:"GET",
    headers:{
        "Authorization":TOKEN
    }
 }

 //3. PIDA EL TAXI
 //Utilice la promesa FETCH para ir al back y consumir el API
 let respuesta=await fetch(URI,peticion)
 let canciones=await  respuesta.json()

 return canciones
}

