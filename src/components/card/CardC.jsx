import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./CardC.css";

const CardC = ({ urlImage, alt, titulo, descripcion, idProducto, precio }) => {
  const imageUrl = `/img/${urlImage}`;
  return (
    <Card className="custom-card">
      <div className="image-container">
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={alt}
          className="custom-card-img"
        />
      </div>
      <Card.Body>
        <Card.Title className="custom-card-title text-truncate">{titulo}</Card.Title>
        <Card.Text className="custom-card-text text-truncate">
          {descripcion}
        </Card.Text>
        <Card.Text className="price">${precio}</Card.Text>
        <div className="text-left">
          <Link to={`/productDetail/${idProducto}`} className="custom-link">
            Ver Más
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardC;
