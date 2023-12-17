import { Container, Row, Col, Image } from 'react-bootstrap';
import icon1 from '../../img/advantages/icon1.png';
import icon2 from '../../img/advantages/icon2.png';
import icon3 from '../../img/advantages/icon3.png';
import icon4 from '../../img/advantages/icon4.png';
import icon5 from '../../img/advantages/icon5.png';
import icon6 from '../../img/advantages/icon6.png';

export const Advantages = () => {
   return (
      <div className="advantages text-center py-5">
         <Container>
            <h2 className="advatages__title tilda-sans-semibold fs-1 mb-5">
               Наши преимущества:
            </h2>
            <Row className="d-flex justify-content-between">
               <Col xs={6} md={4} className="px-2 pb-3">
                  <div className="advantages__icon mb-4">
                     <Image className="img-fluid" src={icon1} alt="" />
                  </div>
                  <h3 className="advantages__subtitle tilda-sans-semibold fs-3 mb-3">
                     Авторская методика
                  </h3>
                  <h4 className="advantages__text tilda-sans-light fs-5">
                     Наши учебники созданы на основе практического опыта сдачи
                     теста
                  </h4>
               </Col>
               <Col xs={6} md={4} className="px-2 pb-3">
                  <div className="advantages__icon mb-4">
                     <Image className="img-fluid" src={icon2} alt="" />
                  </div>
                  <h3 className="advantages__subtitle tilda-sans-semibold fs-3 mb-3">
                     Удобное расположение
                  </h3>
                  <h4 className="advantages__text tilda-sans-light fs-5">
                     SmartPoint, Байзакова 280
                  </h4>
               </Col>
               <Col xs={6} md={4} className="px-2 pb-3">
                  <div className="advantages__icon mb-4">
                     <Image className="img-fluid" src={icon3} alt="" />
                  </div>
                  <h3 className="advantages__subtitle tilda-sans-semibold fs-3 mb-3">
                     Пробные тесты каждую неделю
                  </h3>
                  <h4 className="advantages__text tilda-sans-light fs-5">
                     Сдаем пробные тесты каждые выходные
                  </h4>
               </Col>
               <Col xs={6} md={4} className="px-2 pb-3">
                  <div className="advantages__icon mb-4">
                     <Image className="img-fluid" src={icon4} alt="" />
                  </div>
                  <h3 className="advantages__subtitle tilda-sans-semibold fs-3 mb-3">
                     Формат
                  </h3>
                  <h4 className="advantages__text tilda-sans-light fs-5">
                     Вы можете выбрать любой удобный формат. Как оффлайн, так и
                     онлайн
                  </h4>
               </Col>
               <Col xs={6} md={4} className="px-2 pb-3">
                  <div className="advantages__icon mb-4">
                     <Image className="img-fluid" src={icon5} alt="" />
                  </div>
                  <h3 className="advantages__subtitle tilda-sans-semibold fs-3 mb-3">
                     Удобный график
                  </h3>
                  <h4 className="advantages__text tilda-sans-light fs-5">
                     Вы можете выбрать удобный для вас график вместе с
                     преподавателем. Утром, днем, вечером - как вам удобно
                  </h4>
               </Col>
               <Col xs={6} md={4} className="px-2 pb-3">
                  <div className="advantages__icon mb-4">
                     <Image className="img-fluid" src={icon6} alt="" />
                  </div>
                  <h3 className="advantages__subtitle tilda-sans-semibold fs-3 mb-3">
                     Индивидуальный подход
                  </h3>
                  <h4 className="advantages__text tilda-sans-light fs-5">
                     Индивидуальный подход к студенту
                  </h4>
               </Col>
            </Row>
         </Container>
      </div>
   );
};
