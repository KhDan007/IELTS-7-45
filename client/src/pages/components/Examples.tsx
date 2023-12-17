import { Container, Row, Col, Image } from 'react-bootstrap';
import img1 from '../../img/examples/1.jpg';
import img2 from '../../img/examples/2.jpg';
import img3 from '../../img/examples/3.jpg';
import img4 from '../../img/examples/4.jpg';
import img5 from '../../img/examples/5.jpg';

export const Examples = () => {
   return (
      <div className="examples">
         <Row>
            {/* First column for the main image */}
            <Col xs={12} md={6}>
               <div className="examples__imageContainer">
                  <Image
                     className="w-100 h-100 examples__image"
                     src={img1}
                     alt=""
                  />
               </div>
            </Col>

            {/* Second column for the 4 smaller images */}
            <Col xs={12} md={6}>
               {/* First row of smaller images */}
               <Row>
                  <Col xs={6}>
                     <div className="examples__imageContainer examples__smallImage">
                        <Image
                           className="w-100 h-100 examples__image"
                           src={img2}
                           alt=""
                        />
                     </div>
                  </Col>
                  <Col xs={6}>
                     <div className="examples__imageContainer examples__smallImage">
                        <Image
                           className="w-100 h-100 examples__image"
                           src={img3}
                           alt=""
                        />
                     </div>
                  </Col>
               </Row>

               {/* Second row of smaller images */}
               <Row>
                  <Col xs={6}>
                     <div className="examples__imageContainer examples__smallImage">
                        <Image
                           className="w-100 h-100 examples__image"
                           src={img4}
                           alt=""
                        />
                     </div>
                  </Col>
                  <Col xs={6}>
                     <div className="examples__imageContainer examples__smallImage">
                        <Image
                           className="w-100 h-100 examples__image"
                           src={img5}
                           alt=""
                        />
                     </div>
                  </Col>
               </Row>
            </Col>
         </Row>
      </div>
   );
};
