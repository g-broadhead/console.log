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

const UserHomepage = (props) => {
    const outerBox = {

    }

    const innerBox = {

    }

    return (
        <Stack>
            <Box>
                <Avatar>H</Avatar>
                    <TextField
                        id="filled-multiline-static fullWidth"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="filled"
                    />
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
            </Box>
            <Box>
                <Avatar>H</Avatar>
                    <TextField
                        id="filled-multiline-static fullWidth"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="filled"
                    />
            </Box>
            <Box>
                <Avatar>H</Avatar>
                    <TextField
                        id="filled-multiline-static fullWidth"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="filled"
                    />
            </Box>
        </Stack>
    )
}

export default UserHomepage