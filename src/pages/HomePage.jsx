import { useState, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CarouselC from "../components/carousel/CarouselC";
import CardC from "../components/card/CardC";
import SearchC from "../components/search/SearchC";
import { ProductContext } from "../pages/ProductContext";

const HomePage = () => {
  const { productos } = useContext(ProductContext);
  const [productosFiltrados, setProductosFiltrados] = useState(productos);

  if (!productos || productos.length === 0) {
    return <p>No hay productos disponibles en este momento.</p>;
  }

  return (
    <>
      <CarouselC />

      <Container className="my-3">
        <Row>
          <Col xs={12} md={7} className="text-start">
            <h2 className="section-title">
              Nuevas Colecciones lista para Usar
            </h2>
            <p className="section-description">
              Descubre los nuevos estilos de esta temporada con nuestra
              colección de ropa de lujo. Explora las últimas novedades, desde
              sofisticados vestidos hasta elegantes prendas individuales.
            </p>
          </Col>
          <Col xs={12} md={5} className="text-end mt-5 mt-md-0">
            <h2 className="section-title disp-peq">
              Buscar Productos
            </h2>
            <SearchC
              productos={productos}
              setProductosFiltrados={setProductosFiltrados}
            />
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row>
          {productos.map((producto) => (
            <Col
              key={producto.id}
              xs={6}
              sm={6}
              md={4}
              lg={2}
              className="my-3"
            >
              <CardC
                urlImage={producto.image}
                alt={producto.description}
                titulo={producto.title}
                descripcion={producto.description}
                precio={producto.price}
                idProducto={producto.id}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
