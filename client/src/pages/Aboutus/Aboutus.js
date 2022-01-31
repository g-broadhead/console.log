import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import AboutusCard from '../../components/AboutusCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Item from '@mui/material/ListItem'


const Aboutus = (props) => {
  return (
    <>
    <AppHeader />
      <Box sx={{ flexGrow: 1, mt:'30px', mb:'30px' }}>
        <Grid container spacing={2}>
          <AboutusCard />
          <AboutusCard />
          <AboutusCard />
          <AboutusCard />
          <AboutusCard />
          <AboutusCard />
        </Grid>
      </Box>
    <AppFooter />
    </>
  )
}

export default Aboutus;