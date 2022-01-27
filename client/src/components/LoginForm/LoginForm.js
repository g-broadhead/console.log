import { useState, useContext } from 'react'
import { Form, Label, Input, Button } from 'reactstrap'
import UserAPI from '../../utils/UserAPI'
import AuthContext from '../../utils/AuthContext'

const LoginForm = () => {
 const {
  lUsername,
  lPassword,
  handleInputChange,
  handleLoginUser
 } = useContext(AuthContext)

 return (
  <Form>
   <div className="mb-3">
    <Label htmlFor="username">Username</Label>
    <Input
     type="text"
     className="form-control"
     name="lUsername"
     value={lUsername}
     onChange={handleInputChange} />
   </div>
   <div className="mb-3">
    <Label htmlFor="password">Password</Label>
    <Input
     type="password"
     className="form-control"
     name="lPassword"
     value={lPassword}
     onChange={handleInputChange} />
   </div>
   <Button
    color="primary"
    onClick={handleLoginUser} >
    Log In
   </Button>
  </Form>
 )
}

export default LoginForm
