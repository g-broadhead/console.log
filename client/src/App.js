import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

// Pages
import Splash from './pages/Splash'
import Home from './pages/Home'
import Auth from './pages/Auth'

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/' element={<Auth />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
