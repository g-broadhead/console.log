import { useEffect, useState } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import AppFooter from '../../components/AppFooter'
import AppHeader from '../../components/AppHeader'
import {
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Input,
  Button,
  TextField,
  Alert
} from '@mui/material'
import PostCard from '../../components/PostCard'
import Home from '@mui/icons-material/Home'

const Post = (props) => {
  const navState = useLocation()
  const navigate = useNavigate()
  const params = useParams()

  const [postState, setPostState] = useState({ loading: true, err: '', postData: {} })
  const [commentState, setCommentState] = useState({ content: '' })
  const [refresh, setRefresh] = useState(true)
  const postId = params.id
  useEffect(() => {
    setRefresh(false)
    if (postId.length == 0) {
      setPostState({ ...postState, err: 'Error: No post id was specified' })
      return
    }

    axios.get(`/api/post/${postId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(({ data }) => {
        setPostState({ ...postState, postId: postId, loading: false, postData: data })
        console.log(data)
      }).catch(err => {
        setPostState({ ...postState, err: err })
      })
  }, [refresh])

  const handleCommentChange = ({ target: { name, value } }) => setCommentState({ content: value })
  const handleCommentSubmit = (event) => {
    event.preventDefault()
    axios.post('/api/post/comment', {
      postId: postState.postId,
      content: commentState.content
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    }).then(() => {
      setCommentState({ content: '' })
      // navigate('/post', {state: {postId: postState.postId}, replace:true});
      setRefresh(true)
    }).catch(err => {
      alert('Failed to post comment, see console')
      console.error(err)
    })
  }

  const commentStyle = {
    borderBottom: '1px solid black'
  }

  const CommentCard = (props) => {
    const { comment } = props
    return (
      <ListItem align-items='flex-start' sx={commentStyle}>
        <ListItemAvatar>
          <Avatar src={comment.user.avatar}>{comment.user.name[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText secondary={comment.user.name}>
          {comment.body}
        </ListItemText>
      </ListItem>
    )
  }

  const Loading = (props) => {
    return (
      <>
        <h2>Loading post...</h2>
        {postState.err.length > 0 && <Alert severity='error'>{postState.err}</Alert>}
      </>
    )
  }

  const CommentList = (props) => {
    const comments = postState.postData.comments

    return (
      <List>
        {comments.map((comment, index) => <CommentCard key={index} comment={comment} />)}
      </List>

    )
  }

  return (
    <>
      <AppHeader />
      <Container sx={{ marginTop: '2em' }}>
        {postState.loading
          ? <Loading />
          : <PostCard key='post-card' post={postState.postData} />}

        <Box component='form'>
          <h2>Leave a comment</h2>
          <TextField
            key='comment-field'
            label='Leave a comment'
            sx={{ width: '90%' }}
            value={commentState.content}
            onChange={handleCommentChange}
          />

          <Button
            variant='contained'
            sx={{ margin: '1em' }}
            onClick={handleCommentSubmit}
          >Reply
          </Button>

        </Box>
        <h2>Comments</h2>
        {!postState.loading && <CommentList />}
      </Container>
      <AppFooter />
    </>
  )
}

export default Post
