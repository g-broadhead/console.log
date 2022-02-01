import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const HarrisonR = (props) => {
  return (
    <>
      <Card sx={{ maxWidth: 260 }}>
        <CardMedia
          component="img"
          height="170"
          image="https://i.redd.it/6ewt085xd7131.jpg"
          alt="Team Member Pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Harrison R
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Me
          </Typography>
        </CardContent>
        <CardActions>
          <Button href='https://www.linkedin.com/in/harrisonreich/' size="small">LinkedIn</Button>
          <Button href='https://github.com/Harrison-Reich' size="small">Github</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default HarrisonR;