import logo_transparent from '../img/logo_transparent.png';
import '../css/Home.css';

export const Home = () => {
   return (
      <div className="home">
         <div className="slogan">
            <div className="container mt-4">
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
      </div>
   );
};
