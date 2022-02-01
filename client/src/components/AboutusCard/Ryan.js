import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const RyanC = (props) => {
  return (
    <>
      <Card sx={{ maxWidth: 260 }}>
        <CardMedia
          component="img"
          height="170"
          image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fc6bc1f1-2870-4492-909c-29369011dcf6/d8d7idc-11e7f1a1-22c3-4e21-b717-99135b8ad244.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZjNmJjMWYxLTI4NzAtNDQ5Mi05MDljLTI5MzY5MDExZGNmNlwvZDhkN2lkYy0xMWU3ZjFhMS0yMmMzLTRlMjEtYjcxNy05OTEzNWI4YWQyNDQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mdpljzbDDROsVL2tQBrEVDn5NZa7zJhBPmz-CHCjsMg"
          alt="Team Member Pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ryan C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The power within
          </Typography>
        </CardContent>
        <CardActions>
          <Button href='https://www.linkedin.com/in/ryan-capote-52a83622/' size="small">LinkedIn</Button>
          <Button href='https://github.com/rytc' size="small">Github</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default RyanC;