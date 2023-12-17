import img1 from '../../img/examples/1.jpg';
import img2 from '../../img/examples/2.jpg';
import img3 from '../../img/examples/3.jpg';
import img4 from '../../img/examples/4.jpg';
import img5 from '../../img/examples/5.jpg';

// import '../../css/Home.css';

export const Examples = () => {
   return (
      <div className="examples">
         <div className="row">
            {/* First column for the main image */}
            <div className="col-12 col-md-6">
               <div className="examples__imageContainer">
                  <img
                     className="w-100 h-100 examples__image"
                     src={img1}
                     alt=""
                  />
               </div>
            </div>

            {/* Second column for the 4 smaller images */}
            <div className="col-12 col-md-6">
               {/* First row of smaller images */}
               <div className="row">
                  <div className="col-6">
                     <div className="examples__imageContainer examples__smallImage">
                        <img
                           className="w-100 h-100 examples__image"
                           src={img2}
                           alt=""
                        />
                     </div>
                  </div>
                  <div className="col-6">
                     <div className="examples__imageContainer examples__smallImage">
                        <img
                           className="w-100 h-100 examples__image"
                           src={img3}
                           alt=""
                        />
                     </div>
                  </div>
               </div>

               {/* Second row of smaller images */}
               <div className="row">
                  <div className="col-6">
                     <div className="examples__imageContainer examples__smallImage">
                        <img
                           className="w-100 h-100 examples__image"
                           src={img4}
                           alt=""
                        />
                     </div>
                  </div>
                  <div className="col-6">
                     <div className="examples__imageContainer examples__smallImage">
                        <img
                           className="w-100 h-100 examples__image"
                           src={img5}
                           alt=""
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
