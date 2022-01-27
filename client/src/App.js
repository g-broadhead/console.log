import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

// Pages
import Landing from './pages/Landing'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
