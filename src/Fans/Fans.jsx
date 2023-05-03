import "./Fans.css";
export function Fans() {
  return (
    <>
    <section className="banner">
     <div class="signupFrm">
    <form action="" class="form">
      <h1 class="title">Fans</h1>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="a"/>
        <label for="" class="label">Nombre</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="a"/>
        <label for="" class="label">Fecha De Nacimiento</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="a"/>
        <label for="" class="label">Correo</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="a"/>
        <label for="" class="label">Passaword</label>
      </div>

      <input type="submit" class="submitBtn" value="Registrarte"/>
    </form>
  </div>
  </section>
    </>
  );
  
}
