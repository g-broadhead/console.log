import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import UserAPI from '../../utils/UserAPI'
import AuthContext from '../../utils/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import registerImages from '../../images/register.jpg'

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Console.log.com
      </Link>{' '}
      {new Date().getFullYear()}
      .
    </Typography>
  )
}

const theme = createTheme()

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

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    // console.log(registerState);
    axios.post('/api/user/register', registerState)
      .then(res => {
        navigate('/login', { replace: true })
      }).catch(err => {
        console.log('Failed to register')
        console.error(err)
      })
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${registerImages})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <AppRegistrationIcon/>
            </Avatar>
            <Typography component='h1' variant='h5'>
              <h3>Register Page</h3>
            </Typography>
            <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin='normal'
                required
                fullWidth
                label='Name'
                name='name'
                variant='filled'
                required
                value={registerState.name}
                onChange={handleInputChange}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                label='User Name'
                name='username'
                variant='filled'
                required
                value={registerState.username}
                onChange={handleInputChange}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                label='Password'
                name='password'
                variant='filled'
                type='password'
                required
                value={registerState.password}
                onChange={handleInputChange}
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Signup
              </Button>
              <Grid container>
                <Grid item xs />
                <Grid item>
                  <Link href='#' variant='body2'>
                    Register now
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
export default Register
