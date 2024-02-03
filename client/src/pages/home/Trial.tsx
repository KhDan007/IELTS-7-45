import { Container, Col, Row, Image, Form, Button } from 'react-bootstrap';
import { TrialPhoneInput } from './TrialPhoneInput';
import books from '../../img/books.png';
import { Title } from './Title';
import { useRef } from 'react';
import useForm from './components/UseForm';

const FORM_ENDPOINT = 'http://localhost:8080/contacts'; // TODO - update to the correct endpoint

export const Trial = () => {
   const formElement = useRef(null);
   const additionalData = {
      sent: new Date().toISOString()
   };

   const { handleSubmit, status, message } = useForm({
      additionalData
   });

   return (
      <div className="trial mb-4">
         <Container>
            <Title content="Запишись на бесплатный пробный урок"></Title>
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
                  <Form onSubmit={handleSubmit} action={FORM_ENDPOINT} method="POST">
                     <Form.Group controlId="name">
                        <Form.Control
                           name='name'
                           type="text"
                           placeholder="Введите ваше имя"
                           className="mb-5 input"
                           required
                        />
                     </Form.Group>
                     <TrialPhoneInput />
                     <Button
                        className="px-5 py-3 trial__btn tilda-sans-bold mt-md-5 mt-4"
                        type="submit"
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
