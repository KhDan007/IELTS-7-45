import { Col, Row, Image, Container } from 'react-bootstrap';
import whatsapp from '../../img/links/whatsapp.png';
import instagram from '../../img/links/instagram.png';
import telegram from '../../img/links/telegram.png';

export const Links = () => {
   return (
      <div className="links py-5 ">
         <Container>
            <Row>
               <Col xs={12} sm={4}>
                  <a
                     className="whatsapp mb-3 mb-sm-0"
                     href="https://wa.me/77774577745?text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9%20%D1%83%D1%80%D0%BE%D0%BA%21"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Image src={whatsapp}></Image>
                  </a>
               </Col>
               <Col xs={6} sm={4}>
                  <a
                     className="instagram"
                     href="https://www.instagram.com/ielts.745/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Image src={instagram}></Image>
                  </a>
               </Col>
               <Col xs={6} sm={4}>
                  <a
                     className="telegram"
                     href='https://t.me/khamz1n'
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Image src={telegram}></Image>
                  </a>
               </Col>
            </Row>
         </Container>
      </div>
   );
};
