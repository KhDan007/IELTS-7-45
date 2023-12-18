import { Link } from 'react-router-dom';
import { Image, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import sloganTransparent from '../img/slogan_transparent.png';
import logoTransparent from '../img/logo_transparent.png';
import profilePic from '../img/profile.png';

export function Header() {
   return (
      <Navbar fixed="top" expand="md" className="bg-body-tertiary">
         <Container className="justify-content-between">
            <Navbar.Brand className="header__brand" as={Link} to="/">
               <Image src={logoTransparent}></Image>
            </Navbar.Brand>

            <Navbar.Toggle
               className="justify-content-end"
               aria-controls="basic-navbar-nav"
            />

            <Navbar.Collapse
               className="justify-content-end"
               id="basic-navbar-nav"
            >
               <Nav className="me-auto">
                  <NavDropdown title="Speaking" id="basic-nav-dropdown">
                     <NavDropdown.Item as={Link} to="/speaking/part-1">
                        Part 1
                     </NavDropdown.Item>
                     <NavDropdown.Item as={Link} to="/speaking/part-2">
                        Part 2
                     </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Writing" id="basic-nav-dropdown">
                     <NavDropdown.Item as={Link} to="/writing/part-1">
                        Task 1
                     </NavDropdown.Item>
                     <NavDropdown.Item as={Link} to="/writing/part-2">
                        Task 2
                     </NavDropdown.Item>
                  </NavDropdown>
               </Nav>

               <Nav.Link as={Link} to="/profile" className="header__profile">
                  <Image src={profilePic}></Image>
               </Nav.Link>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}
