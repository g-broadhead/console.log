import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const AboutusCard = (props) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80"
        alt="Team Member Name"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Team Member Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Short Bio about team mamber
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AboutusCard;