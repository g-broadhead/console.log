import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import Container from "@mui/material/Container";
import MainSidebar from "../../components/MainSidebar";
import RightSidebar from "../../components/RightSidebar"
import UserHomepage from "../../components/UserHomepage";
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';
import { flexbox } from '@mui/system';
import Grid from '@mui/material/Grid';
import { palette } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Axios
import {useEffect, useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom'
import axios from "axios";


const Home = (props) => {
  const mainBox = {
    display: 'inline-flex',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between'
  }

  const sidebarStyle = {
    // ml: 0,
    margin: 'auto',
    bgcolor: 'primary.main'
  }

  const rightbarStyle = {
    // mr: 0,
    margin: 'auto',
    bgcolor: 'primary.main'
  }
  const homepageStyle = {
    width: '100%',
    margin: 'auto',
    mt: 4

  }

    return (
        <Box>
            <AppHeader />
            <Grid container spacing={1} sx={mainBox}>
                <Grid item xs={2}>
                    <MainSidebar sx={sidebarStyle}/>
                </Grid>
                <Grid item xs={8}>
                    <UserHomepage sx={homepageStyle} />
                </Grid>
                <Grid item xs={2}>
                <RightSidebar sx={rightbarStyle}/>
                </Grid>
            </Grid>
            <AppFooter />
        </Box>
    );
}

export default Home
