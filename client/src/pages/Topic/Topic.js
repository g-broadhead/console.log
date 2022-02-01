import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
    Container 
} from "@mui/material"
import axios from 'axios';
import PostCard from '../../components/PostCard';

const Topic = (props) => {
    const params = useParams();

    const [topicState, setTopicState] = useState({
        loading: true,
        error: '',
        posts: []
    })

    useEffect(() => {
        axios.get(`/api/posts/topic/${params.topic}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        }).then(({data}) => {
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
                        <PostCard key={index} post={post} />
                    })
                }
            </>
        )
    }

    return (
        <>
            <Container>
                {topicState.loading ? <h1>Loading topic {params.topic}</h1> :
                    <RenderPosts />
                }
            </Container>
        </>
    );

}

export default Topic;