import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Item from '@mui/material/ListItem'
import RyanC from '../../components/AboutusCard/Ryan'

const Aboutus = (props) => {
  return (
    <>
    <AppHeader />
      <Box sx={{ flexGrow: 1, mt:'30px', mb:'30px' }}>
        <Grid container spacing={2}>
          <RyanC />
          <JohnnyC
        </Grid>
      </Box>
    <AppFooter />
    </>
  )
}

export default Aboutus;