// import { Link } from 'react-router-dom';

// export const Header = () => {
//    return (
//       <header className="header">
//          <div className="header__left">
//             <div className="header__logo">
//                <img src={logoTransparent} />
//             </div>

//             <Link to="/">Home</Link>
//             <Link to="/speaking/part-1">Speaking - Part 1</Link>
//             <Link to="/speaking/part-2">Speaking - Part 2</Link>
//             <Link to="/writing/part-1">Writing - Part 1</Link>
//             <Link to="/writing/part-2">Writing - Part 2</Link>
//          </div>

//          <div className="header__right">
//             <div className="header__slogan">
//                <img src={sloganTransparent} alt="" />
//             </div>
//             <Link to="/profile" className="header__profile">
//                <img src={profilePic} alt="" />
//             </Link>
//          </div>
//       </header>
//    );
// };

import { Image, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import sloganTransparent from '../img/slogan_transparent.png';
import logoTransparent from '../img/logo_transparent.png';
import profilePic from '../img/profile.png';

export function Header() {
   return (
      <Navbar expand="lg" className="bg-body-tertiary">
         <Container>
            <Navbar.Brand className='header__brand' href="">
               <Image src={logoTransparent}></Image>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#action/3.1">
                        Action
                     </NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.2">
                        Another action
                     </NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">
                        Something
                     </NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">
                        Separated link
                     </NavDropdown.Item>
                  </NavDropdown>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}
