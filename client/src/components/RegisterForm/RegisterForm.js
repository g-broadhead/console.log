import { useState, useContext } from 'react'
import { Form, Label, Input, Button } from 'reactstrap'
import UserAPI from '../../utils/UserAPI'
import AuthContext from '../../utils/AuthContext'

const RegisterForm = () => {
  const {
    name,
    username,
    email,
    password,
    handleInputChange,
    handleRegisterUser
  } = useContext(AuthContext)

  return (
    <Form>
      <div className="mb-3">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          className="form-control"
          name="username"
          value={username}
          onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          className="form-control"
          name="password"
          value={password}
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
