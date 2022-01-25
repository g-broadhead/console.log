import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Components
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

// Pages
import Landing from './pages/Landing';
import Home from './pages/Home';


function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
   </> 
  );
}

export default App;
