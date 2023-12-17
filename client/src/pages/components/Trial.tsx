import { Container, Col, Row, Image, Form, Button } from 'react-bootstrap';
import { TrialPhoneInput } from './TrialPhoneInput';
import books from '../../img/books.png';

export const Trial = () => {
  return (
    <div className="trial mb-4">
      <Container>
        <h2 className="fs-1 text-center tilda-sans-semibold pb-md-5 pb-2">
          Запишись на бесплатный пробный урок
        </h2>
        <Row className="d-md-flex d-block text-left justify-content-between pt-md-5 pt-3">
          <Col md={6} className="col-9 mx-auto d-block pl-3">
            <Image
              src={books}
              alt=""
              fluid
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Col>
          <Col md={5} className="trial__form col-10 mx-auto mt-4 mt-md-0">
            <p className="tilda-sans-light pb-0 pb-md-4">
              Оставьте свои данные и наш менеджер свяжется с вами
            </p>
            <Form>
              <Form.Group controlId="city">
                <Form.Control
                  type="text"
                  placeholder="Астана"
                  className="mb-5 input"
                />
              </Form.Group>
              <TrialPhoneInput />
              <Button
                className="px-5 py-3 trial__btn tilda-sans-bold mt-md-5 mt-4"
                type="button"
              >
                Отправить
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
