import { consultarCanciones } from "../services/servicioCanciones";
import { ObtenerToken } from "../services/servicioCanciones";
import { useState, useEffect } from "react";
export function Musica() {
  const [canciones, setCanciones] = useState(null);
  const [estacargando, setEstacargando] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(function () {
    ObtenerToken().then((respuesta) => {
      console.log(respuesta)
      setToken(respuesta.access_token);
    });
  }, []);

  useEffect(
    function () {
      if (token) {
        consultarCanciones(token).then(function (respuesta) {
          console.log(respuesta);
          setCanciones(respuesta.tracks);
          setEstacargando(false);
        });
      }
    },
    [token]
  );

  if (estacargando) {
    return (
      <>
        <h1>ESTA CARGANDO EL CONTENIDO</h1>
      </>
    );
  } else {
    return (
      <>
        <div className="fondo">
          <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-2 g-3">
              {canciones.map(function (cancion) {
                return (
                  <div className="col">
                    <div className="card bg-dark border-info h-100 shadow p-3">
                      <h2 className="text-center text-white ">
                        {cancion.name}
                      </h2>
                      <img src={cancion.album.images[1].url} alt="" />
                      <audio
                        className="w-100 my-2"
                        controls
                        src={cancion.preview_url}
                      ></audio>
                      <h3 className=" text-center text-white">
                        Popularidad:<br></br>
                        {cancion.popularity}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
