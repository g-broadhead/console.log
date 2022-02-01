import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const HaoyangY = (props) => {
  return (
    <>
      <Card sx={{ maxWidth: 260 }}>
        <CardMedia
          component="img"
          height="170"
          image="https://i.ytimg.com/vi/ncfXrdy9js8/maxresdefault.jpg"
          alt="Team Member Pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Haoyang Y
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Chill guy
          </Typography>
        </CardContent>
        <CardActions>
          <Button href='' size="small">LinkedIn</Button>
          <Button href='https://github.com/hvoyvng' size="small">Github</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default HaoyangY;