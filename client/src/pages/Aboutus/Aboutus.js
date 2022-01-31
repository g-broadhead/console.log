import AppHeader from '../../components/AppHeader';
import AppFooterAbout from '../../components/AppFooter';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import RyanC from '../../components/AboutusCard/Ryan';
import JohnnyC from '../../components/AboutusCard/JohnnyC';
import ChanwooH from '../../components/AboutusCard/ChanW';
import GarrettB from '../../components/AboutusCard/GarretB';
import HaoyangY from '../../components/AboutusCard/Haoyang';
import HarrisonR from '../../components/AboutusCard/HarrisonR';

const Aboutus = (props) => {
  return (
    <>
      <AppHeader />
      <Container >
        <Grid
          container mt="1px"
          spacing={2}
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
            <ChanwooH />
          </Grid>
          <Grid item xs={4} justifyContent='center' alignItems='center'>
            <HaoyangY />
          </Grid>
          <Grid item xs={4} justifyContent='center' alignItems='center'>
            <GarrettB />
          </Grid>
          <Grid item xs={4} justifyContent='center' alignItems='center'>
            <HarrisonR />
          </Grid>
        </Grid>
      </Container>
      <AppFooterAbout />
    </>
  )
}

export default Aboutus;