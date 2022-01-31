import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
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
      <Container >
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center">
          <Grid item xs={4} justifyContent='center' alignItems='center'>
            <RyanC />
          </Grid>
          <Grid item xs={4} justifyContent='center' alignItems='center'>
            <JohnnyC />
          </Grid>
          <Grid item xs={4} justifyContent='center' alignItems='center'>
            <ChanW />
          </Grid>
          <Grid item xs={4} justifyContent='center' alignItems='center'>
            <Haoyang />
          </Grid>
          <Grid item xs={4} justifyContent='center' alignItems='center'>
            <GarretB />
          </Grid>
          <Grid item xs={4} justifyContent='center' alignItems='center'>
            <HarrisonR />
          </Grid>
        </Grid>
      </Container>
      <AppFooter />
    </>
  )
}

export default Aboutus;