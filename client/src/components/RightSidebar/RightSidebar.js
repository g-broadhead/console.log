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
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



// Icons
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';

const RightSidebar = (props) => {
    const rightbarStyle = {
        flexDirection: "column",
        height: "100%",
        alignItems: "center",
        marginTop: "1em",
        boxShadow: "3",
        bgcolor: "primary.main",
        display: "flex"
    }

    const listStyle = {
        width: "100%"
    }

    const buttonStyle = {
        display: "flex",
        justifyContent: "center",
        mt: 1,
    }

    const searchStyle = {
        display: "block",
        justifyContent: "center"
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
                    <Box sx={searchStyle}>
                        <TextField id="filled-basic" label="Search" variant="filled" />
                        <Box sx={buttonStyle}>
                            <Button variant="contained"><SearchIcon />Search</Button>
                        </Box>
                    </Box>
                </List>
            </div>
        </Box>
    )
}

export default RightSidebar