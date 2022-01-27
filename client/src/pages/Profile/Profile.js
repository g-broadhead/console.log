
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';

const Profile = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3}>
      <Box gridColumn="span 5">
        <Item>
          <Stack direction="row" spacing={2} mt={3} alignItems="center"
            justifyContent="center">
            <Avatar
              alt="Avatar"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 200, height: 200 }}
            />
          </Stack>
          <h1>Profile Name</h1>
          <h2>Position Title</h2>
          <h3>Works at: </h3>
          <h3>Member Since: </h3>
        </Item>
      </Box>
      <Box gridColumn="span 6">
        <Item>
        <h1>Posts</h1>
        <div></div>
        </Item>
      </Box>
      <Box gridColumn="span 5" gap={10} >
      <Item>
        <h1>Personal Information</h1>
        <h3>Email: </h3>
        <h3>Github: </h3>
        <h3>LinkedIn: </h3>
        <h3>Unsplash: </h3>
        <h3>Instagram: </h3>
        <h3>Twitter: </h3>
        <h3>Facebook: </h3>
        </Item>
      </Box>
    </Box>
  );
}

export default Profile;
