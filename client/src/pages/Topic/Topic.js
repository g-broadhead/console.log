import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
    Container 
} from "@mui/material"
import axios from 'axios';
import PostCard from '../../components/PostCard';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import { Box } from '@mui/system';

const Topic = (props) => {
    const params = useParams();

    const [topicState, setTopicState] = useState({
        loading: true,
        error: '',
        posts: []
    })

    useEffect(() => {
        axios.get(`/api/post/topic/${params.topic}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        }).then(({data}) => {
            console.log(data);
            setTopicState({...topicState, posts: data, loading:false});
        }).catch(err => {
            setTopicState({...topicState, loading: false, error: 'Failed to load posts for this topic.'})
            console.log(err);
        })
        
    }, []);


    const RenderPosts = (props) => {
        return (
            <>
                <h1>{params.topic}</h1>
                {topicState.error.length > 0 ? <p>Failed to load posts for this topic</p> :
                    topicState.posts.map((post, index) => {
                        return <PostCard key={index} post={post} />
                    })
                }
            </>
        )
    }

    return (
        <>
            <AppHeader />
            <Container component='div'
                sx={{ mt: '45px' }}
            >
                <Box
                    component='div'
                    gridColumn='span 6'
                    sx={{ overflow: 'scroll', minHeight: '80vh', height: '100px' }}
                >
                {topicState.loading ? <h1>Loading topic {params.topic}</h1> :
                    <RenderPosts />
                }
            </Box>
            </Container>
            <AppFooter /> 
        </>
    );

}

export default Topic;