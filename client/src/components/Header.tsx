import '../css/Header.css';
import { Link } from 'react-router-dom';
import sloganTransparent from '../img/slogan_transparent.png';
import logoTransparent from '../img/logo_transparent.png';
import profilePic from '../img/profile.png';

export const Header = () => {
   return (
      <header className="header">
         <div className="header__left">
            <div className="header__logo">
               <img src={logoTransparent} />
            </div>

            <Link to="/">Home</Link>
            <Link to="/speaking/part-1">Speaking - Part 1</Link>
            <Link to="/speaking/part-2">Speaking - Part 2</Link>
            <Link to="/writing/part-1">Writing - Part 1</Link>
            <Link to="/writing/part-2">Writing - Part 2</Link>
         </div>

         <div className="header__right">
            <div className="header__slogan">
               <img src={sloganTransparent} alt="" />
            </div>
            <Link to="/profile" className="header__profile">
               <img src={profilePic} alt="" />
            </Link>
         </div>
      </header>
   );
};
