import Stack from '@mui/material/Stack';
import { flexbox } from '@mui/system';
import Box from "@mui/material/Box"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


// Icons
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChatIcon from '@mui/icons-material/Chat';

const MainSidebar = (props) => {
    return (
        <Box sx={{ display: 'inline-flex' },{ flexDirection: 'column' }}>
            <div>
                <List>
                    <ListItem>
                        <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                        <ListItemText><a href="/profile">Profile</a></ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><ChatIcon /></ListItemIcon>
                        <ListItemText><a href="/topics">topics</a></ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><ChatIcon /></ListItemIcon>
                        <ListItemText><a href="/topics">topics</a></ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><ChatIcon /></ListItemIcon>
                        <ListItemText><a href="/topics">topics</a></ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><ChatIcon /></ListItemIcon>
                        <ListItemText><a href="/topics">topics</a></ListItemText>
                    </ListItem>
                </List>
            </div>
        </Box>
    )
}

export default MainSidebar