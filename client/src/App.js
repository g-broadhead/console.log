import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

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
import Logout from './pages/Logout'
import { useContext, useEffect, useState } from 'react'
import UserContext from './utils/UserContext'
import Aboutus from './pages/Aboutus'
import Topic from './pages/Topic'

function App () {

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const [userState, setUserState] = useState({
    loggedIn: false,
    userData: {},
    loading: true
  })

  const setLoggedIn = (loggedIn) => {
    setUserState({ ...userState, loggedIn: loggedIn })
  }

  useEffect(() => {
    UserAPI.getUser().then(user => {
      setUserState({ loggedIn: true, userData: user, loading: false })
    }).catch(err => {
      setUserState({ ...userState, loading: false })
    })
  }, [])

  return (
    <>
      <UserContext.Provider value={{ ...userState, setLoggedIn: setLoggedIn }}>
        {userState.loading
? <></> 
        : 
            
        <Router>
          <Routes>
            <Route exact path='/' element={userState.loggedIn ? <Home /> : <Landing />} />
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path='/profile/:id' element={<Profile />} />
            <Route exact path='/post/:id' element={<Post />} />
            <Route exact path='/login' element={userState.loggedIn ? <Navigate to='/' /> : <Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/admin' element={<Admin />} />
            <Route exact path='/about' element={<Aboutus />} />
            <Route exact path='/topic/:topic' element={<Topic />} />
          </Routes>
        </Router>
        
        }
      </UserContext.Provider>
    </>
  )
}

export default App
