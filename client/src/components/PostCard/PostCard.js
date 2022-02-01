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


const PostCard = (props) => {
    const {user, createdAt, content, avatar, topics, comments, _id} = props.post;

    const postStyle = {
        border: "1px solid black",
        borderRadius: "8px",
        boxShadow: "4px 4px 8px #AAA",
        padding: "1em",
        marginBottom: "2em"
    }

    return (
        <Box sx={postStyle}>
            <Box align-items="flex-start" sx={{display: "flex"}}>
                <Avatar sx={{margin: "0.5em"}} src={avatar}>{user.name[0]}</Avatar>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <Typography variant="h5">{user.name}</Typography>
                    <Typography variant="sub">at {createdAt}</Typography>
                </Box>
            </Box>
            <p>{content}</p>
            <a href={"/post/" + _id}>{comments.length} comments</a>
        </Box>
    )
}

export default PostCard;