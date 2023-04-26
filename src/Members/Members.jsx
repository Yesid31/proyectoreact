export function Member() {
  let integrantes = [
    {
      nombre: "Eduin Caz",
      rol: "Voz Principal",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/EduinCaz.jpg?alt=media&token=a0c0ccc1-fb7d-4bcd-be72-e6d4293a3f1b",
      nacimiento: "Nacio En Culiacán,Sinaloa El 30 De Julio De 1994",
      id:1
    },
    {
      nombre: "Joaquín Ruiz",
      rol: "Bajo Electrico",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/Joaquin-Ruiz.jpg?alt=media&token=ab11ac87-2bc6-4d4d-a11f-a2119266381f",
      nacimiento: "Nacio En Tijuana,Baja California,Mexico, 15 De Septiembre De 1993",
      id:2
    },
    {
      nombre: "Christian Téllez",
      rol: "Bajo",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/Cristian-Trellez.jpg?alt=media&token=813e3431-823c-4246-9fec-62f71079724f",
      nacimiento: "10 De Noviembre De 1997 Conocido Como El Comandante ",
      id:3
    },
    {
      nombre: "Dylan Camacho",
      rol: "Acordeonista",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/Dylan-Camacho.jpg?alt=media&token=50b81d5b-a5c4-43f6-abcf-833fdfabb7e4",
      nacimiento: "Nacio En Tijuana,Baja California,Mexico,El 24 De Abril De 1997 ",
      id:4
    },
    {
      nombre:"Fito Rubio",
      rol:"Tambor",
      foto:"https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/Fito-Rubio.jpg?alt=media&token=3d13918a-d9ad-492c-a1d5-ca8552f2e631",
      nacimiento:"Nacio En Tijuana,Baja California,Mexico El 17 De Diciembre De 1990",
      id:5
    },
    {
      nombre:"Oscar Valdez",
      rol:"Acordeón",
      foto:"https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/%C3%93scar_Valdez.png?alt=media&token=1f40ae0a-758b-4418-969a-f7b10fd75faa",
      nacimiento:"Nacio En Nogales Sonora El 22 De Diciembre De 1990",
      id:6
    },
  ];
  return (
  <>
     <div className="row row-cols-1 row-cols-md-3 g-3">
      {
        integrantes.map(function(integrante){
          return(
            <div key={integrante.id}>
              <div className="col">
                <div className="card h-100 shadow">
                 
                  <h3 className="text-center fw-bold">{integrante.nombre}</h3>
                  <img src={integrante.foto} alt="foto" className="img-fluid w-100"/>
                  <h2 className="text-center fw-bold"> Rol: {integrante.rol}</h2>
                  <h1 className="text-center fw-bold"> {integrante.nacimiento}</h1>

                </div>
              </div>
            </div>
          )
        })
      }

  
     </div>


  </>
  );
}
