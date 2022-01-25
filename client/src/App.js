import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Components
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';



// Pages
import Home from './pages/Home';
import Auth from './pages/Auth';


function App() {
  return (
   <>
    <AppHeader />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<Auth />} />
        </Routes>
      </Router>
    <AppFooter />
   </> 
  );
}

export default App;
