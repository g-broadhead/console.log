import { useContext } from 'react'
import { FormControl, InputLabel, Input, Button } from '@mui/material';
// import UserAPI from '../../utils/UserAPI'
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
    <FormControl>
      <div className="mb-3">  
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          type="text"
          className="form-control"
          name="username"
          value={username}
          onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <InputLabel htmlFor="password">Password</InputLabel>
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
    </FormControl>
  )
}

export default RegisterForm
