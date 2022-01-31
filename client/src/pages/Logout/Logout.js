import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import {
    Container,
} from "@mui/material"
import { useEffect } from "react";

const Logout = (props) => {

    useEffect(() => {
        localStorage.removeItem('jwt');
        window.location = '/'
    })

    return (
        <>
            <AppHeader />
                <Container sx={{marginTop: "1em"}}>
                    <h1>Logging out...</h1>
                </Container>
            <AppFooter />
        </>
    );
}

export default Logout