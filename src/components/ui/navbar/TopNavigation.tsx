import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { menuListItem } from '../../../models/MenuList';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';

const TopNavigation = () => {
  const [expanded, setExpanded] = useState(false);
  const closeNavbar = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setExpanded(false);
  };

  return (
    <Navbar
      className="transparent navbar-inverse  border-bottom   border-dark"
      sticky="top"
      collapseOnSelect
      expand="lg"
      expanded={expanded}
    >
      <Container className="navbar-container__items ">
        <Navbar.Brand href="/" className="navbar-brand__text">
          Farhan
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : true)}
          aria-controls="responsive-navbar-nav"
        >
          <RxHamburgerMenu fontSize={22} color="fff" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {menuListItem.map((menuItem, idx) => (
              <Link
                onClick={closeNavbar}
                key={+idx}
                to={menuItem.links}
                className="nav-link custom-nav__link mx-md-2 "
              >
                {menuItem.name}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default TopNavigation;
