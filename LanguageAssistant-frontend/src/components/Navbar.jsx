import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../Utils/translations";

function AppNavbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Language Assistant</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link href="/">{t.home}</Nav.Link>
          <Nav.Link href="/study">{t.study}</Nav.Link>
        </Nav>

        <Dropdown align="end">
          <Dropdown.Toggle variant="dark">
            <FontAwesomeIcon icon={faLanguage} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setLanguage("ja")}>
              日本語
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setLanguage("en")}>
              English
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
