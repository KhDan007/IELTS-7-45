import { Container, Col, Row, Image } from 'react-bootstrap';

import logo_transparent from '../../img/logo_transparent.png';

export const Slogan = () => {
  return (
    <div className="slogan">
      <Container className="mt-4 mb-sm-5 mb-2">
        <Row className="d-flex flex-column text-center align-items-center">
          <Col>
            <Image
              src={logo_transparent}
              style={{ width: '138px' }}
              alt="no image"
              fluid
            />
          </Col>
          <Col>
            <p className="tilda-sans-bold slogan__text">
              Получи 7.0 за 45 дней интенсивной подготовки!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
