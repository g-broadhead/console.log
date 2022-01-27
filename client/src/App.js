import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Components
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

// Pages

import Landing from './pages/Landing';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Post from './pages/Post';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <>
    <AppHeader />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/post" element={<Post />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    <AppFooter />
    </> 
  );
}

export default App;
