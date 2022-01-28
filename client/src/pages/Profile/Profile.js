import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
// import UserAPI from '../../utils/UserAPI';
import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';

const Profile = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const ariaLabel = { 'aria-label': 'description' };

  const [profileState, setProfileState] = useState({
    userData: {
      name: 'Test Name',
      username: 'Test Username',
      workname: 'Test Work',
      positionTitle: 'QA Tester',
      memberSince: '1/2022',
      email: 'test@email.com',
      github: 'github.com/test',
      linkedIn: 'linkedin.com/test',
      instagram: 'instagram.com/test',
      twitter: 'twitter.com/test' 
    }
  })

  // useEffect(() => {
  //   UserAPI.getUser()
  //     .then(user => {
  //       console.log(user)
  //       setProfileState({ ...profileState, userData: user })
  //     })
  //     .catch(err => {
  //       window.location = '/login'
  //     })
  // }, [])

  return (
    <>
      <AppHeader />
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3}>
        <Box gridColumn="span 5">
          <Item>
            <Stack direction="row" spacing={2} mt={3} alignItems="center"
              justifyContent="center">
              <Avatar
                alt="Avatar"
                //  Add avatar get in src
                src="/static/images/avatar/1.jpg"
                sx={{ width: 175, height: 175 }}
                // onclick event to make button. lead to modal for user input
              />
            </Stack>
            <h1>{profileState.userData.name}</h1>
            <h2>{profileState.userData.username}</h2>
            <h2>{profileState.userData.positionTitle}</h2>
            <h3>Works at: {profileState.userData.workname} </h3>
            <h3>Member Since: {profileState.userData.memberSince}</h3>
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
            <h3>Email: {profileState.userData.email}</h3>
            <h3>Github: {profileState.userData.github}</h3>
            <h3>LinkedIn: {profileState.userData.linkedIn}</h3>
            <h3>Instagram: {profileState.userData.instagram}</h3>
            <h3>Twitter: {profileState.userData.twitter}</h3>
          </Item>
        </Box>
        <AppFooter />
      </Box>
    </>
  );
}

export default Profile;