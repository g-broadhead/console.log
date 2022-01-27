import RegisterForm from "../../components/RegisterForm"
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import React, { useState } from 'react';
import { makeStyles } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";

const useStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

const Register = ({ handleClose }) => {
    // create state variables for each input
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(firstName, lastName, email, password);
        handleClose();
    };

    return (
        <form sx={useStyles} onSubmit={handleSubmit}>
            <AppHeader />
            <h3>Register Page</h3>
            <p>Hello this is where all the content goes. Need to fill this with stuff!</p>

            <TextField
                label="First Name"
                variant="filled"
                required
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            <TextField
                label="Last Name"
                variant="filled"
                required
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
            <TextField
                label="Email"
                variant="filled"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                variant="filled"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <div>
                <Button variant="contained" onClick={handleClose}>
                    Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    Signup
                </Button>
                <AppFooter />
            </div>
        </form>
    );
};
export default Register;