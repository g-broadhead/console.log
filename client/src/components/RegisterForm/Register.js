import { useState } from 'react'
import { Form, Label, Input, Button } from 'reactstrap'
import UserAPI from '../../utils/UserAPI/UserAPI'

const RegisterForm = () => {
 const [registerState, setRegisterState] = useState({
  name: '',
  email: '',
  username: '',
  password: ''
 })

 const handleInputChange = ({ target: { name, value } }) => setRegisterState({ ...registerState, [name]: value })

 const handleRegisterUser = event => {
  event.preventDefault()
  UserAPI.register({
   name: registerState.name,
   email: registerState.email,
   username: registerState.username,
   password: registerState.password
  })
   .then(() => {
    alert('User Registered! Please Log In!')
    setRegisterState({ ...registerState, name: '', email: '', username: '', password: '' })
   })
 }

 return (
  <Form>
   <div className="mb-3">
    <Label htmlFor="name">Name</Label>
    <Input
     type="text"
     className="form-control"
     name="name"
     value={registerState.name}
     onChange={handleInputChange} />
   </div>
   <div className="mb-3">
    <Label htmlFor="email">Email</Label>
    <Input
     type="email"
     className="form-control"
     name="email"
     value={registerState.email}
     onChange={handleInputChange} />
   </div>
   <div className="mb-3">
    <Label htmlFor="username">Username</Label>
    <Input
     type="text"
     className="form-control"
     name="username"
     value={registerState.username}
     onChange={handleInputChange} />
   </div>
   <div className="mb-3">
    <Label htmlFor="password">Password</Label>
    <Input
     type="password"
     className="form-control"
     name="password"
     value={registerState.password}
     onChange={handleInputChange} />
   </div>
   <Button
    color="primary"
    onClick={handleRegisterUser} >
    Register
   </Button>
  </Form>
 )
}

export default RegisterForm
