import { Container } from "react-bootstrap";
import FormAdmin from "../components/form/FormAdmin";

const AdminCreateUpdateProduct = () => {
  const idParams = new URLSearchParams(location.search).get("id");
  return (
    <>
      <h2 className="text-center mt-5 mb-5" style={{ color: "#6e6e6c" }}>
        {idParams ? "Editar Producto" : "Crear Producto"}
      </h2>
      <Container className="d-flex justify-content-center aling-items-center vh-100">
        <FormAdmin/>
      </Container>
    </>
  );
};

export default AdminCreateUpdateProduct;
