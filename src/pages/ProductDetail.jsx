import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ProductContext } from "./ProductContext";

const ProductDetail = () => {
  const { productos } = useContext(ProductContext);
  const params = useParams();
  const navigate = useNavigate(); 
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const productoFiltrado = productos.find(
      (producto) => producto.id === Number(params.id)
    );
    setProducto(productoFiltrado);
  }, [productos, params.id]);

  const agregarProductoCarrito = () => {
    const usuarioLogeado = JSON.parse(sessionStorage.getItem("usuarioLogeado")) || null;
    const carritoLs = JSON.parse(localStorage.getItem("carrito")) || [];  

  if (!usuarioLogeado) {
    Swal.fire({
      icon: "info",
      title: "Debes iniciar sesión para poder realizar una compra",
      text: "En breve serás redirigido al inicio de sesión",
    });

    setTimeout(() => {
      navigate("/login");
    }, 500);
    return;
  }

  const productoExisteCarrito = carritoLs.find((prod) => prod.id === producto.id);

  if (productoExisteCarrito) {
    Swal.fire({
      icon: "info",
      title: "El producto ya está en su carrito de compra",
      text: "Si deseas modificar la cantidad de productos, accede a tu carrito de compra",
    });
    return;
  }

  carritoLs.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carritoLs));
  Swal.fire({
    icon: "success",
    title: "El producto se agregó correctamente a tu carrito",
    text: "La cantidad puede productos puede ser modificada desde tu carrito de compra",
  });
};

const irAError404 = () => {
  navigate("/error404"); 
};

if (!producto) {
  return <p>Producto no encontrado</p>;
}    

  return (
    <Container className="my-5">
      <Row>
        <Col sm="12" md="6" className="col-img-detalle-producto text-center">
          <img
            src={`/img/${producto.image}`}
            alt={producto.description}
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              objectFit: "cover",
              maxHeight: "750px",
              display: "block",
              margin: "0 auto",
            }}
          />
        </Col>
        <Col xs={12} md={5} className="mt-5 mt-md-0">
          <h2 style={{ color: "#6e6e6e" }}>{producto.title}</h2>
          <p>{producto.description}</p>
          <p>
            Precio: <span style={{ color: "#cebf02" }}>${producto.price}</span>{" "}
          </p>
          <p>Categoría: {producto.categoria}</p>
          <p>Código: {producto.codigo}</p>
          <p>Stock disponible: {producto.stock}</p>
          <Button
            type="button"
            className="custom-btn-carrito me-2"
            onClick={agregarProductoCarrito}
          >
            Agregar al Carrito
          </Button>
          <Button
            type="button"
            className="custom-btn-comprar"
            onClick={irAError404}
          >
            Comprar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
