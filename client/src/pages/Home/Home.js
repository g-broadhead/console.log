import AppHeader from '../../components/AppHeader'
import AppFooter from '../../components/AppFooter'
import Container from '@mui/material/Container'
import MainSidebar from '../../components/MainSidebar'
import RightSidebar from '../../components/RightSidebar'
import UserHomepage from '../../components/UserHomepage'
import Box from '@mui/material/Box'
import { spacing, flexbox, palette } from '@mui/system'
import Grid from '@mui/material/Grid'
import { ThemeProvider, createTheme } from '@mui/material/styles'

// Axios
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'

const Home = (props) => {
  const mainBox = {
    display: 'inline-flex',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    mt:1
    
  }

  const rightbarStyle = {
    // mr: 0,
    margin: 'auto',
    bgcolor: 'info.light'
  }
  const homepageStyle = {
    width: '100%',
    // margin: 'auto',
    // mt: 4
    ml: 6

  }

    return (
        <Box>
            <AppHeader />
            <Grid className = 'wrap' container spacing={1} sx={mainBox}>
                <Grid item xs={11} sm={8} md={9}>
                    <UserHomepage sx={homepageStyle} />
                </Grid>
                <Grid item md={2} sm={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
                <RightSidebar sx={rightbarStyle}/>
                </Grid>
            </Grid>
            <AppFooter />
        </Box>
    );
}

export default Home
