import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Components
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';



// Pages
import Splash from './pages/Splash';
import Home from './pages/Home';
import Auth from './pages/Auth';


function App() {
  return (
   <>
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route exact path="/" element={<Splash />} />
=======
          <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<Auth />} />
>>>>>>> e8786503229c19e19b64e6a079bcb43d5bf81ffe
        </Routes>
      </Router>
   </> 
  );
}

export default App;
