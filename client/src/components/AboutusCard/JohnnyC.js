import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const JohnnyC = (props) => {
  return (
    <>
      <Card sx={{ maxWidth: '260px' }}>
        <CardMedia
          component="img"
          height="170"
          image="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_7.jpg"
          alt="Team Member Pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Johnny C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I'm Johnny
          </Typography>
        </CardContent>
        <CardActions>
          <Button href='https://www.linkedin.com/in/johnnychavando97/' size="small">LinkedIn</Button>
          <Button href='http://github.com/Shavv97' size="small">Github</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default JohnnyC;