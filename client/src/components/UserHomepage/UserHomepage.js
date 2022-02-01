import { useEffect, useState, useContext } from "react";
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
import ReportIcon from '@mui/icons-material/Report';
import Report from "@mui/icons-material/Report";
import UserContext from "../../utils/UserContext";
import PostCard from "../PostCard";
import { Checkbox, FormControlLabel } from "@mui/material";

const UserHomepage = (props) => {
    const outerBox = {
        overflow: 'auto'
    }

    const userContext = useContext(UserContext);

    const navigate = useNavigate();
    const [postState, setPostState] = useState({ content: '', topics:[] });
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
        //console.log(pagePosts)
        axios.get('/api/post', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }}).then(({data}) => {
                setPagePosts(data);
            })
    }, [])




    const handlePostSubmit = (event) => {
        event.preventDefault();
        if(postState.topics.length == 0) {
            alert("Must select atleast 1 topic before posting.");
            return;
        }

        if(postState.content.length == 0) {
            alert("Post must include some text.");
            return;
        }

        //console.log(postState.content);
        axios.post('/api/post',
            {
                content: postState.content,
                topics: postState.topics
            },
            {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')}` }
            }).then((res) => {
                setPostState({ ...postState, content: '' });
                window.location = '/';
            }).catch(err => {
                console.log(err)
                alert("Failed to make post.");
            })
    }

    const handlePostChange = ({ target: { name, value } }) => setPostState({...postState, content: value })

    const handleTopicChange = ({target: {name, value}}) => {
        let topicsCopy = JSON.parse(JSON.stringify(postState.topics));
        let item = topicsCopy.find((item) => item === name)
        if(item) {
            topicsCopy.splice(topicsCopy.indexOf(name), 1);
        } else {
            topicsCopy.push(name);
        }
        setPostState({...postState, topics: topicsCopy});
    }

    return (
        <Box sx={outerBox}>
            <Stack sx={innerBox}>
                <Grid container spacing={2} sx={{ justifyContent: 'flex-end', mb:"2em" }}>
                    <Grid item xs={1} sx={{ justifyContent: "flex-end", display: "flex" }}>
                        <Avatar sx={{ width: 56, height: 56 }} src={userContext.userData.avatar}>{userContext.userData.name[0]}</Avatar>
                    </Grid>
                    <Grid item xs={11}>
                        <TextField fullWidth
                            id="outlined-textarea fullWidth"
                            label="Send a Post"
                            multiline
                            rows={4}
                            placeholder="Text"
                            onChange={handlePostChange}
                        />
                    </Grid>
                    <FormControlLabel label="APIs" control={<Checkbox name="APIs" onChange={handleTopicChange} />} />
                    <FormControlLabel label="React" control={<Checkbox name="React" onChange={handleTopicChange} />} />
                    <FormControlLabel label="Javascript" control={<Checkbox name="Javascript" onChange={handleTopicChange} />} />
                    <FormControlLabel label="MongoDB" control={<Checkbox name="MongoDB" onChange={handleTopicChange} />} />


                    <Button sx={buttonStyle} variant="contained" endIcon={<SendIcon />} onClick={handlePostSubmit}>
                        Send
                    </Button>
                </Grid>

                {pagePosts.map((elem, i) => {
                    return (
                        <PostCard key={i} post={elem} />
                        /*
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
                        </Grid>*/
                    )
                }).reverse()}

            </Stack>
        </Box>
    )
}

export default UserHomepage