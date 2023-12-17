import { Col, Container, Row, Image } from 'react-bootstrap';
import book1 from '../../img/books/book1.png';
import book2 from '../../img/books/book2.png';
import book3 from '../../img/books/book3.png';

export const Books = () => {
   return (
      <div className="books py-0 py-md-5">
         <Container>
            <Row>
               <Col
                  xs={12}
                  md={4}
                  className="books__elem text-start text-md-center pb-3 pb-md-0"
               >
                  <Row className="align-items-center">
                     <Col xs={6} md={12}>
                        <Image
                           src={book1}
                           style={{
                              width: '100%',
                              height: 'auto',
                              display: 'block'
                           }}
                        />
                     </Col>
                     <Col xs={6} md={12}>
                        <h4 className="books__subtitle tilda-sans-bold pb-3">
                           Impediment 1
                        </h4>
                        <div className="books__description tilda-sans-light">
                           Первый курс (построение лексической и грамматической
                           базы)
                           <br />
                           Длительность - 24 занятия (два месяца) Покрывает
                           уровень
                           <br />
                           Elementary + начало Pre-Intermediate
                        </div>
                     </Col>
                  </Row>
               </Col>
               <Col
                  xs={12}
                  md={4}
                  className="books__elem text-start text-md-center pb-3 pb-md-0"
               >
                  <Row className="align-items-center">
                     <Col xs={6} md={12}>
                        <Image
                           src={book2}
                           style={{
                              width: '100%',
                              height: 'auto',
                              display: 'block'
                           }}
                        />
                     </Col>
                     <Col xs={6} md={12}>
                        <h4 className="books__subtitle tilda-sans-bold pb-3">
                           Impediment 2
                        </h4>
                        <div className="books__description tilda-sans-light">
                           Второй курс (построение лексической и грамматической
                           базы)
                           <br />
                           Длительность - 24 занятия (два месяца)
                           <br />
                           Покрывает уровень - Pre-Intermediate + начало
                           Intermediate
                        </div>
                     </Col>
                  </Row>
               </Col>
               <Col
                  xs={12}
                  md={4}
                  className="books__elem text-start text-md-center pb-3 pb-md-0"
               >
                  <Row className="align-items-center">
                     <Col xs={6} md={12}>
                        <Image
                           src={book3}
                           style={{
                              width: '100%',
                              height: 'auto',
                              display: 'block'
                           }}
                        />
                     </Col>
                     <Col xs={6} md={12}>
                        <h4 className="books__subtitle tilda-sans-bold pb-3">
                           IELTS 7/45
                        </h4>
                        <div className="books__description tilda-sans-light">
                           Основной курс, который мы читаем, 7.45 - задача
                           сделать 7.0 за 45 дней. Если Вашего уровня
                           недостаточно, у нас есть два курса для построения
                           грамматической и лексической базы.
                           <br />
                           Длительность - 20 занятий и 7 пробных тестов
                           <br />
                           Необходимый уровень - Intermediate
                        </div>
                     </Col>
                  </Row>
               </Col>
            </Row>
            <div className="books__bottom text-center pt-3">
               <h5 className="tilda-sans-light pb-3">
                  Impediment (препятствие) - это курсы, которые являются
                  препятствием на Вашем пути и которые прокачают Ваш английский
                  и Вас как человека.
               </h5>
               <h5 className="tilda-sans-light">
                  На пробном занятии Вы получите точное понимание своего
                  текущего уровня и преподаватель подберет для Вас подходящий
                  курс. Вы получите четкую инструкцию как Вам сделать нужный
                  результат.
               </h5>
            </div>
         </Container>
      </div>
   );
};
