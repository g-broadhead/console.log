import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import Container from "@mui/material/Container";
const Home = (props) => {
    return (
        <>
            <AppHeader />
            <Container>
                <h3>Home page</h3>
                <p>Hello this is where all the content goes. Need to fill this with stuff!</p>
            </Container>
            <AppFooter />
        </>
    );
}

export default Home;