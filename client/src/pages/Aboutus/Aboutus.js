import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Item from '@mui/material/ListItem'
import RyanC from '../../components/AboutusCard/Ryan';
import JohnnyC from '../../components/AboutusCard/JohnnyC';
import ChanW from '../../components/AboutusCard/ChanW';
import GarretB from '../../components/AboutusCard/GarretB';
import Haoyang from '../../components/AboutusCard/Haoyang';
import HarrisonR from '../../components/AboutusCard/HarrisonR';

const Aboutus = (props) => {
  return (
    <>
    <AppHeader />
      <Box sx={{ flexGrow: 1, mt:'30px', mb:'30px' }}>
        <Grid container spacing={2}>
          <RyanC />
          <JohnnyC />
          <ChanW />
          <Haoyang />
          <GarretB />
          <HarrisonR />
        </Grid>
      </Box>
    <AppFooter />
    </>
  )
}

export default Aboutus;