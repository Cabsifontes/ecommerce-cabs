import React, { useState } from "react";
import { Form, FormControl, InputGroup, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchC = ({ productos }) => {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const Navigate = useNavigate();

  const manejarCambioBusqueda = (event) => {
    const texto = event.target.value;
    setTextoBusqueda(event.target.value);

    if (texto) {
      const filtrados = productos.filter((producto) =>
        producto.title.toLowerCase().includes(texto.toLowerCase())
      );
      setResultados(filtrados);
    } else {
      setResultados([]);
    }
  };

  const manejarClick = (id) => {
    console.log("ID enviado a ProducDetail:", id);
    Navigate(`/productDetail/${id}`);
  };

  return (
    <Col md={6} className="ms-auto">
      <Form className="d-flex">
        <InputGroup className="mt-2">
          <FormControl
            type="search"
            placeholder="Buscar"
            className="me-2"
            aria-label="Buscar"
            aria-describedby="buscar-button"
            value={textoBusqueda}
            onChange={manejarCambioBusqueda}
          />
        </InputGroup>
      </Form>
      {resultados.length > 0 && (
        <ListGroup className="mt-2">
          {resultados.map((producto) => (
            <ListGroupItem
              key={producto.id}
              action
              onClick={() => manejarClick(producto.id)}
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#6e6e6e",
              }}>
              {producto.title}
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </Col>
  );
};

export default SearchC;
