import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Components
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

// Pages

import Landing from './pages/Landing';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Post from './pages/Post';

function App() {
  return (
   <>
    <AppHeader />
      <Router>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/post" element={<Post />} />
        </Routes>
      </Router>
    <AppFooter />
   </> 
  );
}

export default App;
