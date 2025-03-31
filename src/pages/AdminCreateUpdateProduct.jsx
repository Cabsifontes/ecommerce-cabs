import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import FormAdmin from "../components/form/FormAdmin";

const AdminCreateUpdateProduct = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const isEditMode = id !== null;
  return (
    <>
      <h2 className="text-center mt-5" style={{ color: "#6e6e6c" }}>
        {isEditMode ? "Editar Producto" : "Crear Producto"}
      </h2>
      <Container className="d-flex justify-content-center my-3">
        <FormAdmin />
      </Container>
    </>
  );
};

export default AdminCreateUpdateProduct;
