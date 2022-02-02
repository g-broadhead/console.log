import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import UserAPI from '../../utils/UserAPI';
import PostCard from '../../components/PostCard';
import './Profile.css'
import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { sizing } from '@mui/system';



const Profile = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }));

  // const ariaLabel = { 'aria-label': 'description' };

  const [profileState, setProfileState] = useState({
    userData: {
      name: '',
      username: '',
      workname: '',
      positionTitle: '',
      memberSince: '',
      email: '',
      github: '',
      linkedIn: '',
      instagram: '',
      twitter: '',
      avatar: ''
    }
  })

  // Update Profile Info Function
  const [openProfile, setOpenProfile] = useState(false);
  const profileHandleOpen = () => setOpenProfile(true);
  const profileHandleClose = () => setOpenProfile(false);

  const handleProfileSubmit = (event) => {
    event.preventDefault();
    axios.put('/api/user',
      {
        workname: profileState.workname,
        positionTitle: profileState.positionTitle,
        email: profileState.email,
        github: profileState.github,
        linkedIn: profileState.linkedIn,
        instagram: profileState.instagram,
        twitter: profileState.twitter
      },
      {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')}` }
      }).then(() => {
        setProfileState({
          ...profileState,
          workname: '',
          positionTitle: '',
          email: '',
          github: '',
          linkedIn: '',
          instagram: '',
          twitter: ''
        });
        profileHandleClose();
        window.location = '/profile';
      }).catch(err => {
        alert("Failed to update.");
      })
  }

  const handleProfileChange = ({ target: { name, value } }) => {
    setProfileState({ ...profileState, [name]: value })
  }

  useEffect(() => {
    UserAPI.getUser()
      .then(user => {
        console.log(user)
        setProfileState({ ...profileState, userData: user })
        axios.get(`/api/post/user/${user._id}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
          }
        }).then(({ data }) => {
          console.log(data);
          setTopicState({ ...topicState, posts: data, loading: false });
        })
          .catch(err => {
            setTopicState({ ...topicState, loading: false, error: 'Failed to load posts for this topic.' })
            console.log(err);
          })
      })
      .catch(err => {
        window.location = '/login'
        console.log(err)
      })
  }, [])

  // Style from MUI
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };

  // Avatar Upload Function
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [postState, setPostState] = useState({ avatar: '' });
  const handlePostSubmit = (event) => {
    event.preventDefault()
    console.log(postState.avatar)
    axios.put('/api/user',
      {
        avatar: postState.avatar
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
      }).then(() => {
        setPostState({ ...postState, avatar: '' });
        handleClose();
        window.location = '/profile';
      }).catch(err => {
        alert('Failed to upload avatar.');
      })
  }
  const handlePostChange = ({ target: { name, value } }) => {
    setPostState({ avatar: value })
  }

  // Get and display user posts
  const [topicState, setTopicState] = useState({
    error: '',
    posts: []
  })

  return (
    <>
      <AppHeader />
      <Box
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        gap={3}
        sx={{ mt: '15px' }}
        component='div'
      // sx={{ overflow:'auto' }}
      >
        <Box
          gridColumn='span 5'
          ml={'20px'}
        >
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
                sx={{ width: 115, height: 115, border: '2px solid #000', cursor: 'pointer' }}
                onClick={handleOpen}
              >
                {profileState.userData.name[0]}
              </Avatar>
            </Stack>
            <h1>{profileState.userData.name}</h1>
            <h2>{profileState.userData.username}</h2>
            <h3>Works at: {profileState.userData.workname}</h3>
            <h3>Position Title: {profileState.userData.positionTitle}</h3>
          </Item>
        </Box>
        {/* Personal Information */}
        <Box
          gridColumn='span 5'
          gap={10}
        >
          <Item>
            <h2>Personal Information</h2>
            <h4>Email: {profileState.userData.email}</h4>
            <h4>Github: {profileState.userData.github}</h4>
            <h4>LinkedIn: {profileState.userData.linkedIn}</h4>
            <h4>Instagram: {profileState.userData.instagram}</h4>
            <h4>Twitter: {profileState.userData.twitter}</h4>
            <>
              <Button
                onClick={profileHandleOpen}
                sx={{ width: '100%' }}
              >
                Edit Profile
              </Button>
            </>
          </Item>
        </Box>
      </Box>
      {/* Container for User Posts */}
      <Container
        component='div'
        sx={{ mt: '45px' }}
      >
        <h1>User Posts</h1>
        <Box
          component='div'
          gridColumn='span 6'
          sx={{ overflow: 'scroll', minHeight: '80vh', height: '100px' }}
        >
          {topicState.posts.map((post, index) => {
            return <PostCard key={index} post={post} />
          })}
        </Box>
      </Container>
      {/* Upload avatar modal */}
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        className='myModal'
      >
        <Box sx={style}
          className='myModal'
          justifyContent="center">
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
      {/* Edit Profile Modal */}
      <Modal
        hideBackdrop
        open={openProfile}
        onClose={profileHandleClose}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <Box
          sx={{ ...style, width: 200, '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          component='form'
          noValidate
          autoComplete='off'
        >
          <h1 id='child-modal-title'>Edit Profile</h1>
          <TextField
            key='workname'
            label='Place of Work'
            variant='standard'
            onChange={handleProfileChange}
            name='workname'
            value={profileState.workname}
          />
          <TextField
            id='positionTitle'
            label='Position Title'
            variant='standard'
            onChange={handleProfileChange}
            name='positionTitle'
            value={profileState.positionTitle}
          />
          <br></br>
          <h2>Personal Information</h2>
          <TextField
            id='email'
            label='Email'
            variant='standard'
            onChange={handleProfileChange}
            name='email'
            value={profileState.email}
          />
          <TextField
            id='github'
            label='GitHub Url'
            variant='standard'
            onChange={handleProfileChange}
            name='github'
            value={profileState.github}
          />
          <TextField
            id='linkedIn'
            label='LinkedIn Url'
            variant='standard'
            onChange={handleProfileChange}
            name='linkedIn'
            value={profileState.linkedIn}
          />
          <TextField
            id='instagram'
            label='Instagram URL'
            variant='standard'
            onChange={handleProfileChange}
            name='instagram'
            value={profileState.instagram}
          />
          <TextField
            id='twitter'
            label='Twitter Url'
            variant='standard'
            onChange={handleProfileChange}
            name='twitter'
            value={profileState.twitter}
          />
          <Button
            type='submit'
            variant='outlined'
            onClick={handleProfileSubmit}
            sx={{ mr: '10px' }}
          >
            Submit
          </Button>
          <Button
            type='submit'
            variant='outlined'
            onClick={profileHandleClose}
          >
            Close
          </Button>
        </Box>
      </Modal>
      <AppFooter />
    </>
  )
}

export default Profile
