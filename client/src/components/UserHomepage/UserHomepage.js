import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box"
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { borders } from '@mui/system';
import { spacing } from '@mui/system';
import { flexbox } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { withTheme } from "@emotion/react";
import { useLocation } from 'react-router-dom'

const UserHomepage = (props) => {
    const outerBox = {
        overflow: 'auto'
    }

    const navigate = useNavigate();
    const [postState, setPostState] = useState({ content: '' });
    const [pagePosts, setPagePosts] = useState([]);
    const innerBox = {
        // ml: 6,
        height: "80vh",
        mr: 6,
        mt: 6,
        bgcolor: "white"
    }
    const buttonStyle = {
        mt: 1,
    }

    useEffect(() => {
        console.log(pagePosts)
    }, [pagePosts])




    const handlePostSubmit = (event) => {
        event.preventDefault();
        console.log(postState.content);
        axios.post('/api/post',
            {
                content: postState.content
            },
            {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')}` }
            }).then((res) => {
                console.log("content", res.data.content)
                setPostState({ ...postState, content: '' });
                setPagePosts([...pagePosts, res.data.content]);
                navigate('/');
            }).catch(err => {
                console.log(err)
                alert("Failed to make post.");
            })
    }

    const handlePostChange = ({ target: { name, value } }) => setPostState({ content: value })

    return (
        <Box sx={outerBox}>
            <Stack sx={innerBox}>
                <Grid container spacing={2} sx={{ justifyContent: 'flex-end' }}>
                    <Grid item xs={2} sx={{ justifyContent: "flex-end", display: "flex" }}>
                        <Avatar sx={{ width: 56, height: 56 }}>H</Avatar>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField fullWidth
                            id="outlined-textarea fullWidth"
                            label="Send a Post"
                            multiline
                            rows={4}
                            placeholder="Text"
                            onChange={handlePostChange}
                        />
                    </Grid>
                    <Button sx={buttonStyle} variant="contained" endIcon={<SendIcon />} onClick={handlePostSubmit}>
                        Send
                    </Button>
                </Grid>

                {pagePosts.map((elem, i) => {
                    return (
                        <Grid container key={i} spacing={2} sx={{ justifyContent: 'flex-end', mt: 2 }}>
                            <Grid item xs={2} sx={{ justifyContent: "flex-end", display: "flex" }}>
                                <Avatar sx={{ width: 56, height: 56 }}>H</Avatar>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField fullWidth
                                    id="filled-read-only-input fullWidth"
                                    // label= {elem}
                                    multiline
                                    rows={4}
                                    // placeholder= {elem}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="filled"
                                    defaultValue={elem}
                                />
                            </Grid>
                        </Grid>
                    )
                }).reverse()}

            </Stack>
        </Box>
    )
}

export default UserHomepage