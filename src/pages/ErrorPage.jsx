import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container className="text-center">
      <img
        src="/img/error404.png"
        alt="Error404"
        className="img-fluid my-4"
        style={{ maxWidth: "390px" }}
      />
      <br />
      <Link to="/">
        <Button className="error-button mb-5">Regresar</Button>
      </Link>
    </Container>
  );
};

export default ErrorPage;