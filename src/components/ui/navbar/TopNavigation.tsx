import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { menuListItem } from '../../../models/MenuList';

const TopNavigation = () => {
  return (
    <Navbar
      className="transparent navbar-inverse  border-bottom   border-dark"
      expanded
      sticky="top"
    >
      <Container className="navbar-container__items ">
        <Navbar.Brand href="/" className="navbar-brand__text">
          Farhan Portofolio
        </Navbar.Brand>

        <Nav className="me-auto justify-content-start">
          {menuListItem.map((menuItem, idx) => (
            <Link
              key={+idx}
              to={menuItem.links}
              className="nav-link custom-nav__link mx-md-2 "
            >
              {menuItem.name}
            </Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNavigation;
