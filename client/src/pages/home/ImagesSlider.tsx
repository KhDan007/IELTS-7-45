import { Carousel, Container, Image } from 'react-bootstrap';
import img1 from '../../img/images/1.jpg';
import img2 from '../../img/images/2.jpg';
import img3 from '../../img/images/3.jpg';
import img4 from '../../img/images/4.jpg';
import img5 from '../../img/images/5.jpg';

export const ImagesSlider = () => {
   return (
      <div className="images text-center py-4">
         <Container>
            <Carousel>
               <Carousel.Item>
                  <div className="images__image">
                     <img className="slider-image" src={img1} alt="Image 1" />
                  </div>
               </Carousel.Item>
               <Carousel.Item>
                  <div className="images__image">
                     <img className="slider-image" src={img2} alt="Image 2" />
                  </div>
               </Carousel.Item>
               <Carousel.Item>
                  <div className="images__image">
                     <img className="slider-image" src={img3} alt="Image 3" />
                  </div>
               </Carousel.Item>
               <Carousel.Item>
                  <div className="images__image">
                     <img className="slider-image" src={img4} alt="Image 4" />
                  </div>
               </Carousel.Item>
               <Carousel.Item>
                  <div className="images__image">
                     <img className="slider-image" src={img5} alt="Image 5" />
                  </div>
               </Carousel.Item>
            </Carousel>
         </Container>
      </div>
   );
};
