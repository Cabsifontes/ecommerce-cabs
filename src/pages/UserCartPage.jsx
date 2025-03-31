import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";
import "../App.css";

const UserCartPage = () => {
  const [productos, setProductos] = useState([]);
  const [cantidades, setCantidades] = useState({});

  const obtenerProductos = () => {
    const productosLs = JSON.parse(localStorage.getItem("carrito")) || [];
    setProductos(productosLs);
  };

  const handleChangeQuantity = (ev, idProducto) => {
    setCantidades({
      ...cantidades,
      [idProducto]:ev.target.value,
    });
  };

  const eliminarProductoCarrito = (idProducto) => {
    Swal.fire({
      title: "Estas seguro de que quieres eliminar este producto del carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#CEBF02",
      cancelButtonColor: "#6e6e6e",
      confirmButtonText: "Si, estoy seguro!",
      cancelButtonText: "NO, no quiero eliminarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        const productosLs = JSON.parse(localStorage.getItem("carrito")) || [];
        const carritoActualizado = productosLs.filter(
          (prod) => prod.id !== idProducto
        );
        console.log(carritoActualizado);
        localStorage.setItem("carrito", JSON.stringify(carritoActualizado));

        obtenerProductos();

        Swal.fire({
          title: "Producto eliminado con exito!",
          icon: "success",
        });
      }
    });
  };

  const handleClickPay = (ev) => {
    ev.preventDefault();
    Swal.fire({
      title: "Gracias por tu compra!",
      text: "Tu comprobante será enviado a la dirección de correo registrada",
      icon: "success",
    });
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const totalFinal = productos.reduce((acc, producto) => {
    const cantidadProducto = cantidades[producto.id] || 1; 
    return acc + producto.price * cantidadProducto;
  }, 0);

  return (
    <>
      {productos.length ? (
        <Container className="my-5 vh-100">
          <h2 className="titulo-tablaCarrito mb-5">Carrito de Compras</h2>
          <Table striped bordered hover className="tabla-carrito">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto, i) => (
                <tr key={producto.id}>
                  <td>{i + 1}</td>
                  <td className="w-25">{producto.title}</td>
                  <td>${producto.price}</td>
                  <td className="w-25 input-center">
                    <input
                      type="number"
                      className="w-25"
                      value={cantidades[producto.id] || 1}
                      onChange={(ev) => handleChangeQuantity(ev, producto.id)}
                    />
                  </td>                  
                  <td className="text-center">
                    <Button
                      className="btn-carrito-comprar"
                      onClick={() => eliminarProductoCarrito(producto.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="total-final">
            <p>Total a pagar: ${totalFinal}</p>
            <Button className="btn-carrito-borrar" onClick={handleClickPay}>
              Comprar
            </Button>
          </div>
        </Container>
      ) : (
        <h1 className="text-center">No hay productos cargados en el carrito</h1>
      )}
    </>
  );
};

export default UserCartPage;
