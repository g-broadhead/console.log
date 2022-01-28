import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import React, { useState } from 'react';
import { makeStyles } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Image from "../../images/splash.jpg"

const useStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px',
  paperContainer:{
  backgroundImage : `url(${Image})`
  }
};

const Register = () => {
  // create state variables for each input

  const [registerState, setRegisterState] = useState({
    name: '',
    username: '',
    password: ''
  })

  const handleInputChange = ({ target: { name, value } }) => {
    setRegisterState({ ...registerState, [name]: value })
  }

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    //console.log(registerState);
    axios.post('/api/user/register', registerState)
      .then(res => {
        navigate('/login', {replace: true})
      }).catch(err => {
        console.log("Failed to register");
        console.error(err);
      })
  };

  return (
    <form sx={useStyles} onSubmit={handleSubmit}>
      <AppHeader />
      <h3>Register Page</h3>
      <h3>Happening Now</h3>
      <p>Join Us Today and share your thought!</p>

      <TextField
        label="Name"
        name="name"
        variant="filled"
        required
        value={registerState.name}
        onChange={handleInputChange}
      />
      <TextField
        label="User Name"
        name="username"
        variant="filled"
        required
        value={registerState.username}
        onChange={handleInputChange}
      />
      {/* <TextField
                label="Email"
                variant="filled"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
            /> */}
      <TextField
        label="Password"
        name="password"
        variant="filled"
        type="password"
        required
        value={registerState.password}
        onChange={handleInputChange}
      />
      <div>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
        <AppFooter />
      </div>
    </form>
  );
};
export default Register;