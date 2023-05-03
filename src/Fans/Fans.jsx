import "./Fans.css";
export function Fans() {
  return (
    <>
      <section className="banner">
        <div class="signupFrm">
          <form action="" class="form">
            <h1 class="title">Fans</h1>

            <div class="inputContainer">
              <input type="text" class="input" placeholder="a" />
              <label for="" class="label">
                Nombre
              </label>
            </div>

            <div class="inputContainer">
              <input type="text" class="input" placeholder="a" />
              <label for="" class="label">
                Fecha De Nacimiento
              </label>
            </div>

            <div class="inputContainer">
              <input type="text" class="input" placeholder="a" />
              <label for="" class="label">
                Correo
              </label>
            </div>

            <div class="inputContainer">
              <input type="text" class="input" placeholder="a" />
              <label for="" class="label">
                Passaword
              </label>
            </div>

            <input type="submit" class="submitBtn" value="Registrarte" />
          </form>
        </div>

        <div className="col-12 col-md-5 mt-3 text-white">
          <h5 className="text-white">¿Porqué Surgio Grupo Firme?</h5>
          <input type="radio" name="programa" />
          Porque Se Juntaron Un Grupo De Amigos
          <br/>
          <input type="radio" name="programa" />
          Porque Querían Ganar Dinero
          <br/>
          <input type="radio" name="programa" />
          Porque Solian Estar Juntos
          
          
          <h5 className="text-white">¿Cúal Es El Exito De Grupo Firme?</h5>
          <input type="radio" name="programa" />
          Ya Superame
          <br/>

          <input type="radio" name="programa" />
          Muy Bandida
          <br/>
          <input type="radio" name="programa" />
          Libros Por Kilos
          <br/>

          <h5 className="text-white">
            ¿Cuantas Integrantes Confroman Grupo Firme?
          </h5>
          <input type="radio" name="programa" />
          5
          <br/>
          <input type="radio" name="programa" />
          2
          <br/>
          <input type="radio" name="programa" />
          3
          <br/>
          <input type="radio" name="programa" />
          1
          <br/>

          <h5 className="text-white">¿Cuantos Grammys tiene grupo firme?</h5>
          <input type="radio" name="programa" />
          3
          <br/>
          <input type="radio" name="programa" />
          18
          <br/>
          <input type="radio" name="programa" />
          5
          <br/>

          <h5 className="text-white">¿Cúal Fue Su Primera Canción?</h5>
          <input type="radio" name="programa" />
          Perdoname
          <br/>
          <input type="radio" name="programa" />
          El Remplazo
          <br/>
          <input type="radio" name="programa" />
         Fuera De Servicio
          <br/>
          <input type="submit" class="submitBtn" value="Que Tipo Eres" />
        </div>
      </section>
    </>
  );
}
