import React from 'react'
import FormC from '../components/form/FormC'
import { Container, Row, Col } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <Container className="d-flex justify-content-center aling-items-center vh-100">
      <Row className="w-100">
        <Col s={12} sm={10} md={8} lg={6} xl={5} className="mx-auto">
          <h2 className="text-center mt-5" style={{ color: "#6e6e6c" }}>
            Iniciar Sesión
          </h2>
          <div className='form-container'>
            <FormC idPage="login" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage
