import { useContext } from "react";
import { Button, Container, Nav, Navbar, } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../services/contexts/theme/ThemeContext";

const Header = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleHomeNavigation = () => {
    navigate("/");
  };

  const handleFormNavigation = () => {
    navigate("/product-form");
  };

  const handleCommentsNavigation = () => {
    navigate("/comments");
  };

  return (
    <Navbar expand="lg" className={`mb-3 ${theme === 'dark' ? 'bg-secondary' : 'bg-body-tertiary'}`}>
      <Container fluid>
        <Navbar.Brand
          onClick={handleHomeNavigation}
          style={{ cursor: "pointer" }}
        >
          Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={handleFormNavigation} href="">
              Form
            </Nav.Link>
            <Nav.Link onClick={handleCommentsNavigation} href="">
              Comments
            </Nav.Link>
            <Button
              variant={`${theme === 'dark' ? 'dark' : 'light'}`}
              onClick={toggleTheme}>
              <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
