import logo_transparent from '../img/logo_transparent.png';
import books from '../img/books.png';
import '../css/Home.css';
import { TrialPhoneInput } from './components/TrialPhoneInput';
export const Home = () => {

   return (
      <div className="home">
         <div className="slogan">
            <div className="container mt-4 mb-sm-5 mb-2">
               <div className="d-flex flex-column text-center align-items-center">
                  <img
                     src={logo_transparent}
                     style={{ width: '138px' }}
                     alt="no image"
                     className="img-fluid"
                  />
                  <p className="tilda-sans-bold slogan__text">
                     Получи 7.0 за 45 дней интенсивной подготовки!
                  </p>
               </div>
            </div>
         </div>
         <div className="trial">
            <div className="container">
               <h2 className="fs-1 text-center tilda-sans-semibold pb-sm-5 pb-2">
                  Запишись на бесплатный пробный урок
               </h2>
               <div className="d-sm-flex d-block text-left justify-content-between pt-sm-5 pt-3">
                  <img
                     src={books}
                     alt=""
                     className="col-sm-6 img-fluid col-9 mx-auto d-block pl-3"
                     style={{maxWidth: "100%", height: "auto"}}
                  />
                  <div className="trial__form col-10 mx-auto mt-4 mt-sm-0 col-sm-5">
                     <p className="tilda-sans-light pb-0 pb-sm-4">
                        Оставьте свои данные и наш менеджер свяжется с вами
                     </p>
                     <form action="post">
                        <input
                           name='city'
                           type="text"
                           placeholder="Нурсултан"
                           className="form-control input mb-5"
                        />
                        <TrialPhoneInput />
                        <input className='px-5 py-3 trial__btn tilda-sans-bold mt-sm-5 mt-4' type="button" value="Отправить"/>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
