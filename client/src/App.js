import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Components
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm'

// Pages

import Landing from './pages/Landing';
import Home from './pages/Home';
import Auth from './pages/Auth';


function App() {
  return (
    <>
    <AppHeader />
      <Router>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    <AppFooter />
    </> 
  );
}

export default App;
