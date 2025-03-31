import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink, useNavigate } from 'react-router'

const NavbarC = () => {
  const usuarioLog = JSON.parse(sessionStorage.getItem('usuarioLogeado'))
  console.log("Usuario logueado:", usuarioLog);
  const navigate = useNavigate()

  const logoutUser = () => {
    const usuariosLs = JSON.parse(localStorage.getItem('usuarios')) || []
    const usuario = usuariosLs.find((user) => user.id === usuarioLog.id)
    usuario.login = false
    localStorage.setItem('usuarios', JSON.stringify(usuariosLs))
    sessionStorage.removeItem('usuarioLogeado')

    setTimeout(() => {
      navigate('/')
    }, 100);
  }

  return (
    <>
      <Navbar
        expand="lg"
        className="navbar navbar-transparent navbar-fixed-top"
      >
        <Container fluid>
          <NavLink
            to={
              usuarioLog && usuarioLog.rol === "usuario"
                ? "/user"
                : usuarioLog && usuarioLog.rol === "admin"
                ? "/admin"
                : "/"
            }
          >
            <img
              src="/img/logo.png"
              alt="logo"
              className="logo"
              style={{
                width: "100px",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(0.9)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {usuarioLog && usuarioLog.rol === "usuario" ? (
              <Nav className="ms-auto">
                <NavLink className="nav-link" to="/user">
                  Inicio
                </NavLink>
                <NavLink className="nav-link" to="/user/cart">
                  Carrito
                </NavLink>
                <NavLink className="nav-link" to="/user/error">
                  Favoritos
                </NavLink>
                <NavLink className="nav-link" to="/user/error">
                  Galeria
                </NavLink>
              </Nav>
            ) : usuarioLog && usuarioLog.rol === "admin" ? (
              <Nav className="ms-auto">
                <NavLink className="nav-link" to="/admin">
                  Inicio
                </NavLink>
                <NavLink className="nav-link" to="/admin/users">
                  Panel Usuarios
                </NavLink>
                <NavLink className="nav-link" to="/admin/products">
                  Panel Productos
                </NavLink>
                <NavLink className="nav-link" to="/user">
                  Vista Usuario
                </NavLink>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <NavLink className="nav-link" to="/">
                  Inicio
                </NavLink>
                <NavLink className="nav-link" to="/aboutUs">
                  Sobre Nosotros
                </NavLink>
                <NavLink className="nav-link" to="/contact">
                  Contacto
                </NavLink>
              </Nav>
            )}
            {usuarioLog ? (
              <Nav className="ms-auto">
                <NavLink className="nav-link" to="#" onClick={logoutUser}>
                  Cerrar Sesion
                </NavLink>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <NavLink className="nav-link" to="/login">
                  Iniciar Sesion
                </NavLink>
                <NavLink className="nav-link" to="/register">
                  Registrarse
                </NavLink>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarC
