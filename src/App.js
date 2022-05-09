import {Route, Routes} from 'react-router-dom';
import Dashboard from './components/LandingPage';
import DoctorsPage from './components/Doctors';
import PatientPage from './components/Patient';
import Navbar from './components/subcomponents/Nav';
import './index.scss'
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>

    <Col md={1}>
      <Navbar/>
    </Col>

    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/AstroidGraphs" element={<PatientPage />} ></Route>
      <Route path="/Timeline" element={<DoctorsPage />} ></Route>
    </Routes>
    
    </Container>
  );
}

export default App;
