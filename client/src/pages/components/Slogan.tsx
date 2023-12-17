import logo_transparent from '../../img/logo_transparent.png';

export const Slogan = () => {
   return (
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
   );
};
