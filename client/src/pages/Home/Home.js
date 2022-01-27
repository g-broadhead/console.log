import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import Container from "@mui/material/Container";
import MainSidebar from "../../components/MainSidebar";
import RightSidebar from "../../components/RightSidebar"
import UserHomepage from "../../components/UserHomepage";
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';
import { flexbox } from '@mui/system';

const Home = (props) => {
    const mainBox = {
        display: "inline-flex",
        width: "100%",
        height: "100%",
        justifyContent: 'space-between'
    };

    const sidebarStyle= {
        ml: 0,
        bgcolor: "primary.main",
        width: "20%",
    };

    const rightbarStyle = {
        mr: 0,
        bgcolor: "primary.main",
    };
    
    return (
            <Box sx={mainBox}>
                <MainSidebar sx={sidebarStyle}/>
                <UserHomepage />
                <RightSidebar sx={rightbarStyle}/>
            </Box>
    );
}

export default Home;