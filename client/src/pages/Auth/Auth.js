import { useState } from 'react'
import RegisterForm from "../../components/RegisterForm"
import LoginForm from "../../components/LoginForm"
import UserAPI from '../../utils/UserAPI'
import AuthContext from '../../utils/AuthContext'

const Auth = () => {
 const [authState, setAuthState] = useState({
  name: '',
  email: '',
  username: '',
  password: '',
  lUsername: '',
  lPassword: ''
 })

 authState.handleInputChange = ({ target: { name, value } }) => setAuthState({ ...authState, [name]: value })

 authState.handleRegisterUser = event => {
  event.preventDefault()
  UserAPI.register({
   name: authState.name,
   email: authState.email,
   username: authState.username,
   password: authState.password
  })
   .then(() => {
    alert('User Registered! Please Log In!')
    setAuthState({ ...authState, name: '', email: '', username: '', password: '' })
   })
 }

 authState.handleLoginUser = event => {
  event.preventDefault()
  UserAPI.login({
   username: authState.lUsername,
   password: authState.lPassword
  })
   .then(token => {
    localStorage.setItem('user', token)
    setAuthState({ ...authState, lUsername: '', lPassword: '' })
    window.location = '/'
   })
 }

 return (
  <AuthContext.Provider value={authState}>
   <div className="container">
    <div className="row bg-light p-5 rounded-lg m-3">
     <h1 className="display-4">Song App</h1>
     <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex a inventore quis laboriosam, quae nihil. Veritatis, aut voluptatem! Minima consectetur, modi consequuntur qui neque expedita? Beatae omnis ipsa quos dolor.
      Corrupti dolor repellat non accusamus nostrum necessitatibus, dicta libero. Dolorum blanditiis incidunt similique nesciunt laudantium est maiores deleniti consequatur debitis ipsam, animi eligendi alias suscipit error, doloremque facilis! Quod, saepe?</p>
     <hr className="my-4" />
    </div>
    <div className="row">
     <div className="col-md-6">
      <h5>Register A New Account</h5>
      <hr />
      <RegisterForm />
     </div>
     <div className="col-md-6">
      <h5>Log In To Existing Account</h5>
      <hr />
      <LoginForm />
     </div>
    </div>
   </div>
  </AuthContext.Provider>
 )
}

export default Auth
