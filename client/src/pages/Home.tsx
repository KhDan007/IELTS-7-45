import '../css/Home.css';
import { Slogan } from './components/Slogan';
import { Trial } from './components/Trial';
import { Examples } from './components/Examples';
export const Home = () => {
   return (
      <>
         <Slogan />
         <Trial />
         <Examples />
      </>
   );
};
