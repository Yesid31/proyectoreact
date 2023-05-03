export default function Tienda() {
  let productos = [
    {
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/Foto1.webp?alt=media&token=df6cc4fb-5f58-4131-a688-0ad35f9768fd",
      nombre: "Enfiestados Y Amanecidos Tour",
      precio: "$24.99 USD",
      descripcion:
        "Gorra edición especial, gira 2022 ENFIESTADOS Y AMANECIDOS TOUR.",
      id: 1,
    },
    {
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/foto2.png?alt=media&token=58b99154-9330-46e8-a50b-40129b429c9f",
      nombre: "Forro Grupo Firme",
      precio: "$10.99 USD",
      descripcion: "Forro Personalizado De Grupo Firme",
      id: 2,
    },
    {
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/Foto3.png?alt=media&token=f58036b6-1699-49fa-b302-0b4ab4f9d5d3",
      nombre: "Licorera Grupo Firme",
      precio: "$14.99 USD",
      descripcion:
        "Licorera de acero en inoxidable personalizada de Grupo Firme!",
      id: 3,
    },
    {
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/Producto4.png?alt=media&token=7cf6bf41-21e5-44c7-b721-f55937f3e2cb",
      nombre: "Jersey Firme Colores",
      precio: "$79.99 USD",
      descripcion: "Jersey De La Gira Enfiestados Y Amanecidos",
      id: 4,
    },
    {
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/Producto5.png?alt=media&token=2fc9d8e6-0902-4cd4-900b-7d28394ef5b8",
      nombre: "Llavero De Grupo Firme",
      precio: "$4.99 USD",
      descripcion: "LLavero Grupo Firme Azul o Rosa",
      id: 5,
    },
    {
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/Producto6.png?alt=media&token=618692f8-0812-44b6-bfb8-36e6a2a981f6",
      nombre: "Perfume Para El Carro Grupo Firme",
      precio: "$4.99 USD",
      descripcion:
        "Ambientador de coche colgante GF, proporciona aroma de larga duración para auto o hogar.",
      id: 6,
    },
    {
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/Producto7.png?alt=media&token=82230659-686f-4d8e-8fd8-6b4025451e15",
      nombre: "Playera Firme Tour 2022",
      precio: "$29.99 USD",
      descripcion: "Playera Enfiestados Y Amanecidos",
      id: 7,
    },
    {
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/Producto8.png?alt=media&token=3159a9a5-bb69-460c-bcb5-4629a3e3beda",
      nombre: "Playera Grupo Firme Azul",
      precio: "$19.99 USD",
      descripcion: "Playera Manga Corta Unisex De Grupo Firme",
      id: 8,
    },
    {
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/Producto9.png?alt=media&token=9304155e-f7cd-4e0c-910e-ecc55f601453",
      nombre: "Sueter Firme Negro",
      precio: "$69.99",
      descripcion:
        "Sueter Negro De Grupo Firme Tipo De Tejido 50% Algodón Y 50% Poliester ",
      id: 9,
    },
    {
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/Producto10.png?alt=media&token=5597c0fc-c835-4285-9e38-71e32b55247f",
      nombre: "Gorra Grupo Firme Mexico",
      precio: "$18.99 USD",
      descripcion: "Gorra De Grupo Firme Mexico Original",
      id: 10,
    },
  ];

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/Producto2.jpg?alt=media&token=43672cbf-eefd-4236-b60b-aea7def043f8"
              className="d-block img-fluid w-100"
              alt="foto1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/Producto1.webp?alt=media&token=217dad48-9aac-4895-96dc-845537507bf7"
              className="d-block img-fluid w-100"
              alt="foto2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/Producto3.webp?alt=media&token=c19e1183-0067-4de3-8766-ba771e3e6b7a"
              className="d-block img-fluid w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h1 className="text-center"> Nuestros Productos </h1>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {productos.map((prodcuto) => {
          return (
            <div key={prodcuto.id}>
              <div className="col">
                <div className="card h-100 shadow bg-info">
                  <h1 className="text-center fw-bold">{prodcuto.nombre}</h1>
                  <img
                    src={prodcuto.foto}
                    alt="foto"
                    className="img-fluid w-100"
                  />
                  <h2 className="text-center">Precio: {prodcuto.precio}</h2>
                  <h3 className="text-center">{prodcuto.descripcion} </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
