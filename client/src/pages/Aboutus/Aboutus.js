import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import AboutusCard from '../../components/AboutusCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Item'


const Aboutus = (props) => {
  return (
    <>
    <AppHeader />
      <Box sx={{ flexGrow: 1, mt:'30px', mb:'30px' }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    <AppFooter />
    </>
  )
}

export default Aboutus;