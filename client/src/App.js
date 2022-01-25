import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Components
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

// Pages
import Splash from './pages/Splash';
import Home from './pages/Home';


function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Splash />} />
        </Routes>
      </Router>
   </> 
  );
}

export default App;
