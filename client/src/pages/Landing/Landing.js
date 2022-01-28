import { Navigate, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import SplashImage from "../../images/splash.jpg"


const Landing = (props) => {
    const navigate = useNavigate();

    const boxStyle = {
        display: "block",
        position: "absolute",
        textAlign: "center",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${SplashImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '45%',
        color: "#000"

    };

    const middleBoxStyle = {
        display: "inline-block",
        width: "25%",
        backgroundColor: "#EEE",
        padding: "4em",
        marginTop: "20%",
        boxShadow: "8px 16px 32px #000",
        
    }

    const handleLoginClick = (event) => {
        event.preventDefault();
        navigate('/login');
    }

    const handleRegisterClick = (event) => {
        event.preventDefault();
        navigate('/register');
    }

    return (
        <Box sx={boxStyle}>
            <Box sx={middleBoxStyle}>
                <h1>console.log</h1>
                <h4>a social network for web developers</h4>
                <p>Collaborate, network, code!</p>
                <Button color="primary" sx={{mr: 4}} variant="contained" onClick={handleLoginClick}>Login</Button>
                <Button color="secondary" variant="contained" onClick={handleRegisterClick}>Register</Button>

            </Box>
        </Box>
    )
}

export default Landing;