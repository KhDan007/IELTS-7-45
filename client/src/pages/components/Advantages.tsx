import icon1 from '../../img/advantages/icon1.png';
import icon2 from '../../img/advantages/icon2.png';
import icon3 from '../../img/advantages/icon3.png';
import icon4 from '../../img/advantages/icon4.png';
import icon5 from '../../img/advantages/icon5.png';
import icon6 from '../../img/advantages/icon6.png';

export const Advantages = () => {
   return (
      <div className="advantages text-center py-5">
         <div className="container">
            <h2 className="advatages__title tilda-sans-semibold fs-1">
               Наши преимущества:
            </h2>
            <div className="row d-flex justify-content-between">
               <div className="col-6 col-md-4 px-2 pb-3">
                  <div className="advantages__icon mb-4">
                     <img className="img-fluid" src={icon1} alt="" />
                  </div>
                  <h3 className="advantages__subtitle tilda-sans-semibold fs-3 mb-3">
                     Авторская методика
                  </h3>
                  <h4 className="advantages__text tilda-sans-light fs-5">
                     Наши учебники созданы на основе практического опыта сдачи
                     теста
                  </h4>
               </div>
               <div className="col-6 col-md-4 px-2 pb-3">
                  <div className="advantages__icon mb-4">
                     <img className="img-fluid" src={icon2} alt="" />
                  </div>
                  <h3 className="advantages__subtitle tilda-sans-semibold fs-3 mb-3">
                     Удобное расположение
                  </h3>
                  <h4 className="advantages__text tilda-sans-light fs-5">
                     SmartPoint, Байзакова 280
                  </h4>
               </div>
               <div className="col-6 col-md-4 px-2 pb-3">
                  <div className="advantages__icon mb-4">
                     <img className="img-fluid" src={icon3} alt="" />
                  </div>
                  <h3 className="advantages__subtitle tilda-sans-semibold fs-3 mb-3">
                     Пробные тесты каждую неделю
                  </h3>
                  <h4 className="advantages__text tilda-sans-light fs-5">
                     Сдаем пробные тесты каждые выходные
                  </h4>
               </div>

               <div className="col-6 col-md-4 px-2 pb-3">
                  <div className="advantages__icon mb-4">
                     <img className="img-fluid" src={icon1} alt="" />
                  </div>
                  <h3 className="advantages__subtitle tilda-sans-semibold fs-3 mb-3">
                     Авторская методика
                  </h3>
                  <h4 className="advantages__text tilda-sans-light fs-5">
                     Наши учебники созданы на основе практического опыта сдачи
                     теста
                  </h4>
               </div>
               <div className="col-6 col-md-4 px-2 pb-3">
                  <div className="advantages__icon mb-4">
                     <img className="img-fluid" src={icon2} alt="" />
                  </div>
                  <h3 className="advantages__subtitle tilda-sans-semibold fs-3 mb-3">
                     Удобное расположение
                  </h3>
                  <h4 className="advantages__text tilda-sans-light fs-5">
                     SmartPoint, Байзакова 280
                  </h4>
               </div>
               <div className="col-6 col-md-4 px-2 pb-3">
                  <div className="advantages__icon mb-4">
                     <img className="img-fluid" src={icon3} alt="" />
                  </div>
                  <h3 className="advantages__subtitle tilda-sans-semibold fs-3 mb-3">
                     Пробные тесты каждую неделю
                  </h3>
                  <h4 className="advantages__text tilda-sans-light fs-5">
                     Сдаем пробные тесты каждые выходные
                  </h4>
               </div>
            </div>
         </div>
      </div>
   );
};
