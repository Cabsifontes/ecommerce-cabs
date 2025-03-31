import Carousel from "react-bootstrap/Carousel";
import "./CarouselC.css";

const CarouselC = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          src="/img/Imagenes-carousel-1.svg"
          alt="imagen1"
          className="w-100 img-fluid"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/img/Imagenes-carousel-2.svg"
          alt="imagen2"
          className="w-100 img-fluid"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/img/Imagenes-carousel-3.svg"
          alt="imagen3"
          className="w-100 img-fluid"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselC;
