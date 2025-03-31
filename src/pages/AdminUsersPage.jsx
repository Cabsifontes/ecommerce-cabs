import { Container } from "react-bootstrap"
import TableC from "../components/table/TableC"
import { useEffect, useState } from "react"
import Swal from "sweetalert2";

const AdminUsersPage = () => {
  const [usuarios, setUsuarios] = useState([])

  const obtenerUsuarios = () => {
    const usuariosLs = JSON.parse(localStorage.getItem('usuarios')) || [];
    setUsuarios(usuariosLs)
  };

  useEffect(() => {
    obtenerUsuarios()
  }, [])

  const eliminarUsuario = (idUsuario) => {
    Swal.fire({
      title: "¿Estás seguro que deseas eliminar este usuario?",
      text: "Ten en cuenta que esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#CEBF02",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar", 
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevosUsuarios = usuarios.filter((user) => user.id !== idUsuario);
        setUsuarios(nuevosUsuarios);
        localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));
        Swal.fire("Eliminado", "Usuario eliminado", "success");
      }
    });    
  };

  return (
    <>
      <Container className="my-5 vh-80" style={{ height: "60vh" }}>
        <h2 className="text-center mt-5 mb-5" style={{ color: "#6e6e6c" }}>
          Administrar Usuarios
        </h2>        
        <div className="users-table">
          <TableC array={usuarios} idPage="users" showDeleteOnly={true} eliminarUsuario={eliminarUsuario}/>
        </div>
      </Container>
    </>
  );
}

export default AdminUsersPage
