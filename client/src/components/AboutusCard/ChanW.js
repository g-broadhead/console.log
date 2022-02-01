import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const ChanwooH = (props) => {
  return (
    <>
      <Card sx={{ maxWidth: 260 }}>
        <CardMedia
          component="img"
          height="170"
          image="https://lolskinshop.com/wp-content/uploads/2015/05/splash-art-muay-thai-lee-sin.jpg"
          alt="Team Member Pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Chanwoo H
          </Typography>
          <Typography variant="body2" color="text.secondary">
            One more coin
          </Typography>
        </CardContent>
        <CardActions>
          <Button href='https://www.linkedin.com/in/nathan-hwang-b836ab117/' size="small">LinkedIn</Button>
          <Button href='https://github.com/adipure' size="small">Github</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ChanwooH;