import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import UserAPI from '../../utils/UserAPI';
import * as React from 'react';
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
import { Dialog } from '@mui/material';

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

  const [openProfile, setOpenProfile] = useState(false);
  const profilehandleOpen = () => setOpenProfile(true);
  const profilehandleClose = () => setOpenProfile(false);

  const ariaLabel = { 'aria-label': 'description' };

  const [profileState, setProfileState] = useState({
    userData: {
      name: '',
      username: '',
      workname: 'Test Work',
      positionTitle: 'QA Tester',
      memberSince: '',
      email: 'test@email.com',
      github: 'github.com/test',
      linkedIn: 'linkedin.com/test',
      instagram: 'instagram.com/test',
      twitter: 'twitter.com/test',
      avatar: ''
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
        window.location = '/profile';
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
      <Box
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        gap={3}
      >
        <Box gridColumn='span 5'>
          <Item>
            <Stack
              direction='row'
              spacing={2}
              mt={3}
              alignItems='center'
              justifyContent='center'
            >
              <Avatar
                alt='Avatar'
                src={profileState.userData.avatar}
                sx={{ width: 175, height: 175, border: '2px solid #000', cursor: 'pointer' }}
                onClick={handleOpen}
              >{profileState.userData.name[0]}
              </Avatar>

              {/* Upload avatar modal */}
              <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
              >
                <Box sx={style}>
                  <Typography
                    id='modal-modal-title'
                    variant='h6'
                    component='h2'
                  >
                    Input Image URL to update Avatar
                  </Typography>
                  <Box
                    component='form'
                    sx={{
                      '& > :not(style)': { m: 1, width: '25ch' }
                    }}
                    noValidate
                    autoComplete='off'
                  >
                    <TextField
                      id='standard-basic'
                      label='Image URL'
                      variant='standard'
                      onChange={handlePostChange}
                      name='avatar'
                      value={postState.avatar}
                    />
                    <Button
                      type='submit'
                      variant='outlined'
                      onClick={handlePostSubmit}
                    >
                      Submit
                    </Button>
                    <Button
                      type='submit'
                      variant='outlined'
                      onClick={handleClose}
                    >
                      Close
                    </Button>
                  </Box>
                </Box>
              </Modal>
            </Stack>
            <h1>{profileState.userData.name}</h1>
            <h2>{profileState.userData.username}</h2>
            <h2>{profileState.userData.positionTitle}</h2>
            <h3>Works at: </h3> {profileState.userData.workname}
            <h3>Member Since: </h3> {profileState.userData.memberSince}
          </Item>
        </Box>
        <Box
          gridColumn='span 6'
        >
          <Item>
            <h1>User Posts</h1>
            <div></div>
          </Item>
        </Box>
        <Box
          gridColumn='span 5'
          gap={10}
        >
          <Item>
            <h1>Personal Information</h1>
            <h3>Email: </h3>{profileState.userData.email}
            <h3>Github: </h3>{profileState.userData.github}
            <h3>LinkedIn: </h3>{profileState.userData.linkedIn}
            <h3>Instagram: </h3>{profileState.userData.instagram}
            <h3>Twitter: </h3>{profileState.userData.twitter}
            <>
              <Button
                onClick={profilehandleOpen}
              >
                Edit Profile
              </Button>
              <Modal
                hideBackdrop
                open={openProfile}
                onClose={profilehandleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
              >
                <Box sx={{ ...style, width: 200 }}>
                  <h1 id="child-modal-title">Edit Profile</h1>
                  <TextField id="worksAt" label="Works at" variant="standard" />
                  <TextField id="jobTitle" label="Job Title" variant="standard" />
                  <br></br>
                  <h2>Personal Information</h2>
                  <TextField id="email" label="Email" variant="standard" />
                  <TextField id="gitHub" label="GitHub Url" variant="standard" />
                  <TextField id="linkedIn" label="LinkedIn Url" variant="standard" />
                  <TextField id="instagram" label="Instagram" variant="standard" />
                  <TextField id="twitter" label="Twitter Url" variant="standard" />
                  
                  <Button
                    type='submit'
                    onClick={profilehandleClose}
                  >
                    Submit
                  </Button>
                  <Button
                    type='submit'
                    onClick={profilehandleClose}
                  >
                    Close
                  </Button>
                </Box>
              </Modal>
            </>
          </Item>
        </Box>
        <AppFooter />
      </Box>
    </>
  );
}

export default Profile;