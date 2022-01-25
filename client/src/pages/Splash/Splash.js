import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import SplashImage from "../../images/splash.jpg"

const Splash = (props) => {

    const boxStyle = {
        display: "block",
        position: "absolute",
        textAlign: "center",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${SplashImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '50%',
        color: "#000"

    };

    const middleBoxStyle = {
        display: "inline-block",
        width: "15%",
        backgroundColor: "#EEE",
        padding: "4em",
        marginTop: "20%",
        boxShadow: "-16px 0px 32px #000",
        
    }

    return (
        <Box sx={boxStyle}>
            <Box sx={middleBoxStyle}>
                <h1>console.log</h1>
                <h4>a social network for web developers</h4>
                <p>Collaborate, network, code!</p>
                <Button color="primary" sx={{mr: 4}} variant="contained">Login</Button>
                <Button color="secondary" variant="contained">Register</Button>

            </Box>
        </Box>
    )
}

export default Splash;