import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const GarrettB = (props) => {
  return (
    <>
      <Card sx={{ maxWidth: 260 }}>
        <CardMedia
          component="img"
          height="170"
          image="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_4.jpg"
          alt="Team Member Pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Garrett B
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Born in New Hampshire, raised in Southern California. I love technology just as much as I love getting away from it. The outdoors or at my desk is where you can find me.
          </Typography>
        </CardContent>
        <CardActions>
          <Button href='https://www.linkedin.com/in/garrettbroadhead/' size="small">LinkedIn</Button>
          <Button href='https://github.com/g-broadhead' size="small">Github</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default GarrettB;