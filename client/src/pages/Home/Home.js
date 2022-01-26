import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import Container from "@mui/material/Container";
import MainSidebar from "../../components/MainSidebar";
import RightSidebar from "../../components/RightSidebar"
const Home = (props) => {
    return (
        <>
            
            <Container>
                <MainSidebar />
                <RightSidebar />
            </Container>
            
        </>
    );
}

export default Home;