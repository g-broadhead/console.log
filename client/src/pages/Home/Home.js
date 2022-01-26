import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import Container from "@mui/material/Container";
import MainSidebar from "../../components/MainSidebar";
import RightSidebar from "../../components/RightSidebar"
import UserHomepage from "../../components/UserHomepage";
import Box from '@mui/material/Box';
const Home = (props) => {
    const postBox = {
        alignContent: "center",
        

    }
    return (
        <>
            
            <Container>
                <MainSidebar />
                <RightSidebar />
                <UserHomepage />
            </Container>
            
        </>
    );
}

export default Home;