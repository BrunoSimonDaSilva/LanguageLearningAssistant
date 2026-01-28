import { Card, Col} from "react-bootstrap";
import AppNavbar from "./components/Navbar";

import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { translations } from "./Utils/translations";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignature } from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TestGrammar from "./pages/TestGrammar";

function App() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <BrowserRouter>
      <AppNavbar />

      <main className="" style={{ padding: "20px" }}>
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <Col className="d-flex" xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <Link className="m-2" to="/TestGrammar" style={{ textDecoration: "none" }}>
                  <Card style={{ width: "18rem", cursor: "pointer" }}>
                    <div
                      style={{
                        height: "180px",
                        backgroundColor: "#3a3f45",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faSignature}
                        style={{ fontSize: "100px", color: "#adb5bd" }}
                      />
                    </div>

                    <Card.Body>
                      <Card.Title>{t.TestYouGrammar}</Card.Title>
                      <Card.Text>{t.GrammarTestExplain}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
                <Link className="m-2" to="/TestGrammar" style={{ textDecoration: "none", display: "none" }}>
                  <Card style={{ width: "18rem", cursor: "pointer" }}>
                    <div
                      style={{
                        height: "180px",
                        backgroundColor: "#3a3f45",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faSignature}
                        style={{ fontSize: "100px", color: "#adb5bd" }}
                      />
                    </div>

                    <Card.Body>
                      <Card.Title>{t.TestYouGrammar}</Card.Title>
                      <Card.Text>{t.GrammarTestExplain}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            }
          />

          {/* Página de Teste */}
          <Route path="/TestGrammar" element={<TestGrammar />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
