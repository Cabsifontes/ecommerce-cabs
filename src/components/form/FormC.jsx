import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FormC.css'
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const FormC = ({ idPage }) => {

  const navigate = useNavigate()
  const [errores, setErrores] = useState({})
  const [registro, setRegistro] = useState({
    usuario: '',
    email: '',
    contrasenia: '',
    repContrasenia: '',
    check: false
  })
  const [inicioSesion, setInicioSesion] = useState({
    usuario: '',
    contrasenia: ''
  })

  const handleChangeFormRegister = (ev) => {
    const value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
    setRegistro({ ...registro, [ev.target.name]: value })
  }

  const registroUsuario = (ev) => {
    ev.preventDefault()
    console.log(registro)
    const { usuario, email, contrasenia, repContrasenia, check } = registro
    let nuevoError = {}

    if (!usuario) {
      nuevoError.usuario = 'Error Usuario'
    }

    if (usuario && email && contrasenia && repContrasenia && check) {
      if (contrasenia === repContrasenia) {
        const usuariosLs = JSON.parse(localStorage.getItem('usuarios')) || []

        const nuevoUsuario = {
          id: usuariosLs[usuariosLs.length - 1]?.id + 1 || 1,
          nombreUsuario: usuario,
          emailUsuario: email,
          contrasenia,
          tyc: check,
          rol: email === "admin@admin.com" ? "admin" : "usuario",
          login: false,
          status: 'enable'
        }

        usuariosLs.push(nuevoUsuario)
        localStorage.setItem('usuarios', JSON.stringify(usuariosLs))

        Swal.fire({
          title: "Registro exitoso!",
          text: "En breve seras redirigido al inicio de tu sesion!",
          icon: "success"
        });

        setRegistro({
          usuario: '',
          email: '',
          contrasenia: '',
          repContrasenia: '',
          check: false
        })

        setTimeout(() => {
          navigate('/login')
        }, 1000);

      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Las contraseñas no son iguales!",
        });
      }
    }
    setErrores(nuevoError)
  }

  const handleChangeFormLogin = (ev) => {
    setInicioSesion({ ...inicioSesion, [ev.target.name]: ev.target.value })
  }

  const iniciarSesionUsuario = (ev) => {
    ev.preventDefault()
    const usuariosLs = JSON.parse(localStorage.getItem('usuarios')) || []
    const { usuario, contrasenia } = inicioSesion

    const usuarioExiste = usuariosLs.find((user) => user.nombreUsuario === usuario)

    if (!usuarioExiste) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario y/o contraseña incorrectos.",
      });
    }

    if (usuarioExiste.contrasenia === contrasenia) {
      usuarioExiste.login = true
      localStorage.setItem('usuarios', JSON.stringify(usuariosLs))
      sessionStorage.setItem('usuarioLogeado', JSON.stringify(usuarioExiste))

      if (usuarioExiste.rol === 'usuario') {
        navigate('/user')
      } else {
        navigate('/admin')
      }

    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario y/o contraseña incorrectos.",
      });
    }
  }

  return (
    <Container className="d-flex justify-content-center my-5 vh-100">
      <Form className="w-90" style={{ maxWidth: "400px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa nombre de usuario. Ej: usuario123"
            value={
              idPage === "register" ? registro.usuario : inicioSesion.usuario
            }
            onChange={
              idPage === "register"
                ? handleChangeFormRegister
                : handleChangeFormLogin
            }
            name="usuario"
            className={
              errores.usuario ? "form-control is-invalid" : "form-control"
            }
          />
          {errores.usuario && (
            <Form.Text className="text-danger">Campo USUARIO vacio</Form.Text>
          )}
        </Form.Group>

        {idPage === "register" && (
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email de Usuario</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Ingresa tu email. Por ej: usuario@dominio.com"
              value={registro.email}
              onChange={handleChangeFormRegister}
            />
            <Form.Text className="text-muted">
              Nunca compartiremos su correo electrónico con nadie más.
            </Form.Text>
          </Form.Group>
        )}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Colocar una contraseña"
            name="contrasenia"
            value={
              idPage === "register"
                ? registro.contrasenia
                : inicioSesion.contrasenia
            }
            onChange={
              idPage === "register"
                ? handleChangeFormRegister
                : handleChangeFormLogin
            }
          />
          {idPage === "register" && (
            <ul className="lista-contrasenia">
              <li>Alternar mayúsculas y minúsculas</li>
              <li>Añadir caracteres especiales y números (%#*$123... etc)</li>
            </ul>
          )}
        </Form.Group>

        {idPage === "register" && (
          <>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Colocar una contraseña"
                name="repContrasenia"
                value={registro.repContrasenia}
                onChange={handleChangeFormRegister}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Aceptar terminos y condiciones"
                name="check"
                value={registro.check}
                onChange={handleChangeFormRegister}
              />
            </Form.Group>
          </>
        )}
        <Button
          variant="primary"
          type="submit"
          onClick={
            idPage === "register" ? registroUsuario : iniciarSesionUsuario
          }
        >
          {idPage === "register" ? "Enviar Datos" : "Ingresar"}
        </Button>
      </Form>
    </Container>
  );
}

export default FormC

