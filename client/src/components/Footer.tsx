import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../css/Footer.css';
import whatsapp from '../img/links/whatsapp.png';
import instagram from '../img/links/instagram.png';

export const Footer: React.FC = () => {
   return (
      <footer className="footer">
         <Container>
            <Row className="align-items-center">
               <Col xs={4}>
                  <a className="footer__logo" href="">
                     IELTS 7/45
                  </a>
               </Col>
               <Col className="footer__copyright" xs={4}>
                  &copy; 2023 IELTS 7/45. All rights reserved.
               </Col>
               <Col xs={4}>
                  <div className="footer__links">
                     <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://wa.me/77774577745?text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9%20%D1%83%D1%80%D0%BE%D0%BA%21"
                     >
                        <Image src={whatsapp}></Image>
                     </a>
                     <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/ielts.745/"
                     >
                        <Image src={instagram}></Image>
                     </a>
                  </div>
               </Col>
            </Row>
         </Container>
      </footer>
   );
};
