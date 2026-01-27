import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AppNavbar from './components/Navbar'

import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { translations } from "./Utils/translations";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSignature } from '@fortawesome/free-solid-svg-icons'

function App() {
  const {language} = useContext(LanguageContext);
  const t = translations[language];

  return (
    <>
      <AppNavbar />
      <main>
        <Card style={{ width: '18rem' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ height: '180px', backgroundColor: '#3a3f45', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}>
              <FontAwesomeIcon icon={faSignature} style={{ fontSize: '100px', color: '#adb5bd' }} />
            </div>
          </div>

          <Card.Body>
            <Card.Title>{t.TestYouGrammar}</Card.Title>
            <Card.Text>
              {t.GrammarTestExplain}
            </Card.Text>
          </Card.Body>
        </Card>
      </main>
    </>
  )
}

export default App
