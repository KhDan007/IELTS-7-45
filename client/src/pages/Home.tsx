import logo_transparent from '../img/logo_transparent.png';

export const Home = () => {
   return (
      <div className="home">
         <div className="container">
            <div className="d-flex flex-column text-center align-items-center">
               <img
                  src={logo_transparent}
                  style={{ width: '138px' }}
                  alt="no image"
                  className="img-fluid"
               />
               <p>Получи 7.0 за 45 дней интенсивной подготовки!</p>
            </div>
         </div>
      </div>
   );
};
