import { Container } from "react-bootstrap";
import TableC from "../components/table/TableC";
import { useContext, useEffect } from "react";
import { ProductContext } from "../pages/ProductContext";
import { Link } from "react-router-dom"; 

const AdminProductsPage = () => {
  const { productos, setProductos } = useContext(ProductContext);

  useEffect(() => {
    const productosGuardados =
      JSON.parse(localStorage.getItem("productos")) || [];
    setProductos(productosGuardados);
  }, []);
  
  useEffect(() => {
    console.log("Productos cargados: ", productos);
  }, [productos]);

  const eliminarProducto = (id) => {
    console.log("Eliminar producto con id: ", id);
    const productosActualizados = productos.filter(producto => producto.id !== id);
    setProductos(productosActualizados);
  };

  const habilitarProducto = (id) => {
    console.log(`Intentando cambiar estado del producto con ID: ${id}`);
    setProductos((prevProductos) => {
      const productosActualizados = prevProductos.map((producto) =>
        producto.id === id
          ? {
              ...producto,
              status: producto.status === "enable" ? "disable" : "enable",
            }
          : producto
      );
      localStorage.setItem("productos", JSON.stringify(productosActualizados));
      return productosActualizados;
    });
    console.log("Habilitar producto con id: ", id);
  };

  const editarProducto = (id, nuevosDatos) => {
    setProductos((prevProductos) =>
      prevProductos.map((producto) =>
        producto.id === id ? { ...producto, ...nuevosDatos } : producto 
      )
    );
    console.log("Editar producto con id: ", id);
  };

  if (!productos || productos.length === 0) {
    return <div>No hay productos disponibles</div>;
  }  

  return (
    <Container className="my-5">
      <h2 className="text-center mt-5" style={{ color: "#6e6e6c" }}>
        Administrar Productos
      </h2>

      <div className="d-flex justify-content-end mb-3">
        <Link className="btn btn-primary" to="/admin/products/createUpdate">
          Agregar Producto
        </Link>
      </div>
      <TableC
        array={productos}
        idPage="products"
        eliminarProducto={eliminarProducto}
        habilitarProducto={habilitarProducto}
        editarProducto={editarProducto}
        showEditButton={true}
        actionsClass="vertical-actions"
        className="admin-products-table"
      />
    </Container>
  );
};

export default AdminProductsPage;
