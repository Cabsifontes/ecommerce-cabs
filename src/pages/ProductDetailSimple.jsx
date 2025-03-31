import { useParams } from "react-router-dom";

const ProductDetailSimple = () => {
  const params = useParams();
  console.log("Parámetros de la URL:", params);
  return <div>Detalle del Producto</div>;
};

export default ProductDetailSimple;
