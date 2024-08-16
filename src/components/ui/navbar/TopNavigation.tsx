import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { menuListItem } from '../../../models/MenuList';
import { RxHamburgerMenu } from 'react-icons/rx';

const TopNavigation = () => (
  <Navbar
    className="transparent navbar-inverse  border-bottom   border-dark"
    sticky="top"
    collapseOnSelect
    expand="lg"
  >
    <Container className="navbar-container__items ">
      <Navbar.Brand href="/" className="navbar-brand__text">
        Farhan
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <RxHamburgerMenu fontSize={22} color="fff" />
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto justify-content-start">
          {menuListItem.map((menuItem, idx) => (
            <Link
              key={+idx}
              to={menuItem.links}
              className="nav-link custom-nav__link mx-md-3 "
            >
              {menuItem.name}
            </Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopNavigation;
