import { Link } from "react-router-dom";

export const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <div className="header__links">
               <Link to="/speaking/part-1">Speaking - Part 1</Link>
               <Link to="/speaking/part-2">Speaking - Part 2</Link>
               <Link to="/writing/part-1">Writing - Part 1</Link>
               <Link to="/writing/part-2">Writing - Part 2</Link>
            </div>
         </div>
      </header>
   );
};
