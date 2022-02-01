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
          image="https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80"
          alt="Team Member Pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Garrett B
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Links to Team Member's contact info
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