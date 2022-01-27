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
} from "@mui/material"
import PostCard from "../../components/PostCard"

const Post = (props) => {

    const dummyData = {
        user: "ryan",
        content: "Hello this is a test post",
        date: '2022-01-26',
        comments: [
            {
                content: "This is a comment",
                user: "bob"
            },
            {
                content: "Second comment!",
                user: "george"
            }
        ]

    }

    const postStyle = {
        border: "1px solid black",
        padding: "1em"
    }

    const commentStyle = {
        borderBottom: "1px solid black"
    }

    const CommentCard = (props) => {
        const { comment } = props;
        return (
            <ListItem align-items="flex-start" sx={commentStyle}>
                <ListItemAvatar>
                    <Avatar>{comment.user[0]}</Avatar>
                </ListItemAvatar>
                <ListItemText secondary={comment.user}>
                    {comment.content}
                </ListItemText>
            </ListItem>
        )
    }

    return (
        <Container sx={{marginTop: "1em"}}>
            <PostCard 
                user={dummyData.user}
                date={dummyData.date}
                content={dummyData.content} />

            <Box component="form">
                <h2>Leave a comment</h2>
                <Input placeholder="Comment..." label="Comment" sx={{ width: '90%' }}/>
                <Button variant="contained" sx={{margin: "1em"}}>Reply</Button>
            </Box>
            <h2>Comments</h2>
            <List>
                {dummyData.comments.map(comment => <CommentCard comment={comment} />)}
            </List>
        </Container>
    )

}

export default Post;