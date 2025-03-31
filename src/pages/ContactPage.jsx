import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../App.css";

const ContactPage = () => {
  return (
    <div className="contact-page pt-5">
      <Container className="my-5">
        <Row className="align-items-start justify-content-center contact-row gx-0">
          <Col xs={12} md={5} className="contact-column px-2">
            <h3 className="contact-title">¿Tienes alguna pregunta?</h3>
            <p>
              Si tienes alguna pregunta o inquietud, no dudes en escribirnos.
              Haremos todo lo que esté a nuestro alcance para responderte lo
              antes posible.
            </p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="contact-label">Nombre</Form.Label>
                <Form.Control
                  className="contact-input"
                  type="text"
                  placeholder="Ingresa tu nombre"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="contact-label">Email</Form.Label>
                <Form.Control
                  className="contact-input"
                  type="email"
                  placeholder="Ingresa tu email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label className="contact-label">Mensaje</Form.Label>
                <Form.Control
                  className="contact-input contact-textarea"
                  as="textarea"
                  rows={5}
                  placeholder="Escribe tu mensaje aquí..."
                  required
                  style={{ resize: "none" }}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="custom-button">
                Enviar Mensaje
              </Button>
            </Form>
          </Col>

          <Col xs={12} md={5} className="contact-column contact-info px-2">
            <h3 className="contact-title mt-5 mt-md-0">Dirección:</h3>
            <p>Av. Gustave Eiffel, 75007 Paris, France</p>
            <p>
              <strong>Teléfono:</strong> +123 456 789
            </p>

            <div className="map-container mt-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.5072823571486!2d2.292613075961629!3d48.857810000748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fe1e62501e1%3A0x4010e6e8341363d3!2sAv.%20Gustave%20Eiffel%2C%2075007%20Paris%2C%20France!5e1!3m2!1sen!2sar!4v1742525537128!5m2!1sen!2sar"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
