import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import UserAPI from '../../utils/UserAPI';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const Profile = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const ariaLabel = { 'aria-label': 'description' };

  const [profileState, setProfileState] = useState({
    userData: {
      name: '',
      username: '',
      workname: 'Test Work',
      positionTitle: 'QA Tester',
      memberSince: '1/2022',
      email: 'test@email.com',
      github: 'github.com/test',
      linkedIn: 'linkedin.com/test',
      instagram: 'instagram.com/test',
      twitter: 'twitter.com/test',
      avatar: '',
    }
  })

  useEffect(() => {
    UserAPI.getUser()
      .then(user => {
        console.log(user)
        setProfileState({ ...profileState, userData: user })
      })
      .catch(err => {
        // window.location = '/login'
        console.log(err)
      })
  }, [])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [postState, setPostState] = useState({ avatar: '' });

  const handlePostSubmit = (event) => {
    event.preventDefault();
    console.log(postState.avatar);
    axios.put('/api/user',
      {
        avatar: postState.avatar
      },
      {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')}` }
      }).then(() => {
        setPostState({ ...postState, avatar: '' });
        handleClose();
        window.location= '/profile';
      }).catch(err => {
        alert("Failed to upload avatar.");
      })
  }

  const handlePostChange = ({ target: { name, value } }) => {
    setPostState({ avatar: value })
  }

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
                src={profileState.userData.avatar}
                sx={{ width: 175, height: 175, border: "2px solid #000", cursor: 'pointer' }}
                onClick={handleOpen}
              >{profileState.userData.name[0]}
              </Avatar>

              {/* Upload avatar modal */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Input Image URL to update Avatar
                  </Typography>
                  <Box 
                    component="form"
                    sx={{
                      '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField 
                      id="standard-basic" 
                      label="Image URL" 
                      variant="standard" 
                      onChange={handlePostChange} 
                      name='avatar'
                      value={postState.avatar}/>
                    <Button 
                      type='submit' 
                      variant='outlined'
                      onClick={handlePostSubmit}>
                      Submit
                    </Button>
                  </Box>
                </Box>
              </Modal>
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