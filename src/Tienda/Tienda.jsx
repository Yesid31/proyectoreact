export default function Tienda() {
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
            <img src="https://firebasestorage.googleapis.com/v0/b/musicosygt.appspot.com/o/Producto3.webp?alt=media&token=c19e1183-0067-4de3-8766-ba771e3e6b7a" className="d-block img-fluid w-100" alt="..." />
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
    </>
  );
}
