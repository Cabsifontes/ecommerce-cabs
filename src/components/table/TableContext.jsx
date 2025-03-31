import { createContext, useState, useEffect } from "react";

export const TableContext = createContext();

const TableProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("productos"));
    if (storedProducts) {
      setProductos(storedProducts);
    }
  }, []);

  const eliminarProducto = (id) => {
    const nuevosProductos = productos.filter((producto) => producto.id !== id);
    setProductos(nuevosProductos);
    localStorage.setItem("productos", JSON.stringify(nuevosProductos));
  };

  const habilitarProducto = (id) => {
    const nuevosProductos = productos.map((producto) =>
      producto.id === id
        ? { ...producto, habilitado: !producto.habilitado }
        : producto
    );
    setProductos(nuevosProductos);
    localStorage.setItem("productos", JSON.stringify(nuevosProductos));
  };

  const editarProducto = (id, datosActualizados) => {
    const nuevosProductos = productos.map((producto) =>
      producto.id === id ? { ...producto, ...datosActualizados } : producto
    );
    setProductos(nuevosProductos);
    localStorage.setItem("productos", JSON.stringify(nuevosProductos));
  };

  return (
    <TableContext.Provider
      value={{ productos, eliminarProducto, habilitarProducto, editarProducto }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
