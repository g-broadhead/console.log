import Stack from '@mui/material/Stack';
import { bgcolor, display, flexbox } from '@mui/system';
import Box from "@mui/material/Box"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { palette } from '@mui/system';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';



// Icons
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChatIcon from '@mui/icons-material/Chat';

const RightSidebar = (props) => {
    const rightbarStyle = {
        // right: "0",
        // position: "absolute",
        width: "20%",
        flexDirection: "column",
        height: "100%",
        alignItems: "center",
        marginTop: "1em",
        boxShadow: "3",
        bgcolor: "primary.main",
        display: "flex"
    }

    // const secondBox = {
    //     width: "100%",
    //     bgcolor: "red",
    //     padding: "0",
    //     display: "inline-block"
    // }

    const listStyle = {
        width: "100%"
    }
    return (
        <Box sx={rightbarStyle}>
            <div sx={listStyle}>
                <List>
                    <ListItem>
                        <ListItemIcon><ChatIcon /></ListItemIcon>
                        <ListItemText>Topics</ListItemText>
                    </ListItem>
                    <Divider/>
                    <Box>
                    <ListItem>
                        <ListItemIcon><ChatIcon /></ListItemIcon>
                        <ListItemText><Link href="/topics" underline="none" sx={{ color: 'black' }}>APIs</Link></ListItemText>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemIcon><ChatIcon /></ListItemIcon>
                        <ListItemText><Link href="/topics" underline="none" sx={{ color: 'black' }}>React</Link></ListItemText>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemIcon><ChatIcon /></ListItemIcon>
                        <ListItemText><Link href="/topics" underline="none" sx={{ color: 'black' }}>Javascript</Link></ListItemText>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemIcon><ChatIcon /></ListItemIcon>
                        <ListItemText><Link href="/topics" underline="none" sx={{ color: 'black' }}>MongoDB</Link></ListItemText>
                    </ListItem>
                    </Box>
                </List>
            </div>
        </Box>
    )
}

export default RightSidebar