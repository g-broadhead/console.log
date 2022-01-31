import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import Container from '@mui/material/Container';
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
      <Container sx={{ flexGrow: 1, mt:'30px', mb:'30px' }}>
        <Grid container spacing={2} direction='row' justifyContent='center' alignItems='center'>
          <RyanC />
          <JohnnyC />
          <ChanW />
          <Haoyang />
          <GarretB />
          <HarrisonR />
        </Grid>
      </Container>
    <AppFooter />
    </>
  )
}

export default Aboutus;