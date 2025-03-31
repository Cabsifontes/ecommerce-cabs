import { Container, Row, Col, } from "react-bootstrap";
import "../App.css";

const AboutUs = () => {
  return (
    <div className="vh-80">
      <Container className="my-5 px-3">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center">
            <img
              src="/img/SobreNosotros.svg"
              alt="Sobre nosotros"
              className="img-fluid"
            />
          </Col>
          <Col className="pb-5 mt-5 mt-md-0" xs={12} md={6}>
            <h2 className="about-titulo">Sobre Nosotros</h2>
            <p className="about-texto">
              Somos una empresa comprometida con la excelencia de nuestros
              clientes. Nuestra misión es proporcionar productos y servicios de
              alta calidad, buscando siempre la innovación.
            </p>
            <p className="about-texto">
              Nuestro equipo está compuesto por profesionales apasionados que
              trabajan para brindarte lo mejor. Con años de experiencia en el
              sector, nos enorgullece ofrecer un servicio de atención
              personalizado.
            </p>
            <div>
              <img
                src="./img/cabs.svg"
                alt="cabs"
                className="img-fluid"
                style={{ width: "15%" }}
              />
            </div>
            <div
              className="mt-1"
              style={{ color: "#6e6e6c", whiteSpace: "pre-line" }}
            >
              Carolina A. Bravo S. {"\n"}
              Fundadora
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
