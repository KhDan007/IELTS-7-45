import { Col, Row, Image, Container } from 'react-bootstrap';
import alim from '../../img/alim.jpg';

export const Alim = () => {
   return (
      <div className="alim py-5">
         <Container>
            <Row className="align-items-center">
               <Col xs={12} md={6}>
                  <div className="alim__top">
                     <h3 className="alim__name tilda-sans-semibold">
                        Alimzhan Khamzin
                     </h3>
                     <h5 className="fs-5 alim__info tilda-sans-light">
                        CEO IELTS 7/45
                        <br />
                        IELTS Score 8.5
                     </h5>
                  </div>
                  <h4 className="fs-5 alim__message tilda-sans-light pb-4 pb-md-0">
                     Наша задача - построить такой уровень английского, который
                     будет полезен не только для сдачи теста, но и для
                     дальнейшего обучения заграницей.
                  </h4>
               </Col>
               <Col xs={12} md={6}>
                  <Image fluid src={alim}></Image>
               </Col>
            </Row>
         </Container>
      </div>
   );
};
