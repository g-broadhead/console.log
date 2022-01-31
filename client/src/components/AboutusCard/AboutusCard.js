import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AboutusCard = (props) => {
  return (
  <Box m={1} display='flex'alignItems='center' flexDirection='row'>
    <Card sx={{ maxWidth: 300, mt: '10px', ml: '20px' }}>
      <CardMedia
        component="img"
        height="200"
        image=""
        alt="Team Member Pic"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Team Member Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Links to members contact info
        </Typography>
      </CardContent>
    </Card>
  </Box>  
  );
}

export default AboutusCard;