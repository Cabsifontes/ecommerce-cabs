import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";
import "./TableC.css";

const images = import.meta.glob("/public/img/*");

const TableC = ({
  array,
  idPage,
  eliminarProducto,
  habilitarProducto,
  editarProducto,
  eliminarUsuario,
  showDeleteOnly = false,
  showEditButton = true,
  actionsClass = "vertical-actions",
  tableClass = "",
}) => {
  const navigate = useNavigate();

  if (!array || array.length === 0) {
    return <div>No hay producto disponible</div>;
  }

  const borrarProducto = (idProducto) => {
    const usuarioLog = JSON.parse(sessionStorage.getItem("usuarioLogeado"));
    if (!usuarioLog) {
      Swal.fire({
        title: "Iniciar sesión!",
        icon: "info",
      });

      setTimeout(() => {
        navigate("/login");
      }, 500);
      return;
    }

    Swal.fire({
      title: "¿Seguro deseas eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#99B9C5",
      cancelButtonColor: "#cebf02",
      confirmButtonText: "Sí, estoy seguro!",
      cancelButtonText: "No, no quiero!",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProducto(idProducto);
        Swal.fire({
          title: "Producto eliminado con éxito!",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="table-responsive table-container">
      <Table
        striped
        bordered
        hover
        responsive="sm"
        className={`table ${tableClass}`}
      >
        <thead>
          {idPage === "products" ? (
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Imagen</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          ) : (
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          )}
        </thead>
        <tbody>
          {array.map((element, i) =>
            idPage === "products" ? (
              <tr key={element.id}>
                <td>{i + 1}</td>
                <td className="w-25 text-start">{element.title}</td>
                <td className="text-center">
                  <img
                    src={`${import.meta.env.BASE_URL}img/${element.image}`}
                    alt={element.title}
                    className="product-image"
                    onError={(e) => (e.target.src = "/img/fallback.jpg")}
                  />
                </td>
                <td className="w-25 text-start">{element.description}</td>
                <td className="text-center">${element.price}</td>
                <td>
                  <div className={`table-actions ${actionsClass}`}>
                    <Button
                      className="btn-eliminar"
                      onClick={() => borrarProducto(element.id)}
                    >
                      Eliminar
                    </Button>
                    <Button
                      className="mx-2 btn-habilitar"
                      onClick={() => habilitarProducto(element.id)}
                    >
                      {element.status === "enable"
                        ? "Habilitar"
                        : "Deshabilitar"}
                    </Button>
                    {showEditButton && idPage === "products" && (
                      <Link
                        to={`/admin/products/createUpdate?id=${element.id}`}
                        className="btn btn-success"
                      >
                        Editar
                      </Link>
                    )}
                  </div>
                </td>
              </tr>
            ) : (
              <tr key={element.id}>
                <td>{i + 1}</td>
                <td>{element.nombreUsuario}</td>
                <td className="w-25">{element.emailUsuario}</td>
                <td>{element.rol}</td>
                <td>
                  <div className={`table-actions ${actionsClass}`}>
                    {showDeleteOnly ? (
                      <Button onClick={() => eliminarUsuario(element.id)}>
                        Eliminar
                      </Button>
                    ) : (
                      <>
                        <Button onClick={() => eliminarUsuario(element.id)}>
                          Eliminar
                        </Button>
                        <Button className="mx-2" variant="warning">
                          Deshabilitar
                        </Button>
                        <Button variant="success">Editar</Button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TableC;
