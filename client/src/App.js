import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

// Pages
import Landing from './pages/Landing'
import Home from './pages/Home'
import Register from './pages/Register'

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
