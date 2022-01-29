import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import UserAPI from './utils/UserAPI'

// Components
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

// Pages
import Landing from './pages/Landing'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Post from './pages/Post'
import Admin from './pages/Admin'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={UserAPI.getUser() ? <Home /> : <Landing />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/post" element={<Post />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path='/admin' element={<Admin />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
