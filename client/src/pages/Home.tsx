import '../css/Home.css';
import { Slogan } from './home/Slogan';
import { Trial } from './home/Trial';
import { Examples } from './home/Examples';
import { Advantages } from './home/Advantages';
import { Books } from './home/Books';
import { How } from './home/How';
import { Alim } from './home/Alim';
import { Reviews } from './home/Reviews';
import { ImagesSlider } from './home/ImagesSlider';
export const Home = () => {
   return (
      <>
         <Slogan />
         <Trial />
         <Examples />
         <Advantages />
         <Books />
         <How />
         <Alim />
         <Reviews />
         <Trial />
         <ImagesSlider />
      </>
   );
};
