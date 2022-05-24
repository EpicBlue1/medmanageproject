import {Route, Routes} from 'react-router-dom';
import Dashboard from './components/LandingPage';
import DoctorsPage from './components/Doctors';
import PatientPage from './components/Patient';
import './index.scss'
import { Container, Row, Col } from 'react-bootstrap';
import SignIn from './components/signIn';

function App() {
  return (
    <Container fluid>

    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/SignIn" element={<SignIn />} ></Route>
      <Route path="/PatientPage" element={<PatientPage />} ></Route>
      <Route path="/DoctorsPage" element={<DoctorsPage />} ></Route>
    </Routes>
    
    </Container>
  );
}

export default App;
