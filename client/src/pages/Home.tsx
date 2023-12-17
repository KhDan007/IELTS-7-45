import '../css/Home.css';
import { Slogan } from './components/Slogan';
import { Trial } from './components/Trial';
import { Examples } from './components/Examples';
import { Advantages } from './components/Advantages';
import { Books } from './components/Books';
export const Home = () => {
   return (
      <>
         <Slogan />
         <Trial />
         <Examples />
         <Advantages />
         <Books />
      </>
   );
};
