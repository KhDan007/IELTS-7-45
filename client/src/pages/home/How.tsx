import { Container } from 'react-bootstrap';
import { Title } from './Title';

export const How = () => {
   return (
      <div className="how py-5 ">
         <Container>
            <Title content="Как это работает?" />
            <div className="steps">
               <div className="steps__number">
                  <span>1</span>

                  <div className="steps__text">
                     <h4 className="tilda-sans-bold">Оставьте заявку</h4>
                  </div>
               </div>
               <div className="steps__number">
                  <span>2</span>

                  <div className="steps__text">
                     <h4 className="tilda-sans-bold">
                        Пройдите бесплатный пробный урок
                     </h4>
                     <h6 className="tilda-sans-light">
                        30 минут - индивидуально
                     </h6>
                  </div>
               </div>
               <div className="steps__number">
                  <span>3</span>

                  <div className="steps__text">
                     <h4 className="tilda-sans-bold">Преподаватель подберет подходящую программу</h4>
                  </div>
               </div>
               <div className="steps__number">
                  <span>4</span>

                  <div className="steps__text">
                     <h4 className="tilda-sans-bold">Интенсивная работа</h4>
                  </div>
               </div>
               <div className="steps__number">
                  <span>5</span>

                  <div className="steps__text">
                     <h4 className="tilda-sans-bold">Результат</h4>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};
