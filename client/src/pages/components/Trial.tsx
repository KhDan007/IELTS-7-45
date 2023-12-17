import { TrialPhoneInput } from "./TrialPhoneInput";
import books from '../../img/books.png';

export const Trial = () => {
   return (
      <div className="trial mb-4">
         <div className="container">
            <h2 className="fs-1 text-center tilda-sans-semibold pb-md-5 pb-2">
               Запишись на бесплатный пробный урок
            </h2>
            <div className="d-md-flex d-block text-left justify-content-between pt-md-5 pt-3">
               <img
                  src={books}
                  alt=""
                  className="col-md-6 img-fluid col-9 mx-auto d-block pl-3"
                  style={{ maxWidth: '100%', height: 'auto' }}
               />
               <div className="trial__form col-10 mx-auto mt-4 mt-md-0 col-md-5">
                  <p className="tilda-sans-light pb-0 pb-md-4">
                     Оставьте свои данные и наш менеджер свяжется с вами
                  </p>
                  <form action="post">
                     <input
                        name="city"
                        type="text"
                        placeholder="Астана"
                        className="form-control input mb-5"
                     />
                     <TrialPhoneInput />
                     <input
                        className="px-5 py-3 trial__btn tilda-sans-bold mt-md-5 mt-4"
                        type="button"
                        value="Отправить"
                     />
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};
