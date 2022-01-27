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
import Paper from '@mui/material/Paper';

const UserHomepage = (props) => {
    const outerBox = {
        mt: 2,
        mr: 2,
    }

    const buttonStyle = {
        mt: 1,
    }

    return (
        <Stack sx={outerBox}>
            <Grid container spacing={2} sx={{ justifyContent: 'flex-end' }}>
                <Grid item xs={2} sx={{ justifyContent: "flex-end", display: "flex" }}>
                        <Avatar sx={{ width: 56, height: 56 }}>H</Avatar>
                </Grid>
                <Grid item xs={10}>
                    <TextField fullWidth
                        id="filled-multiline-static fullWidth"
                        label="Multiline fullWidth"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="filled"
                    />
                </Grid>
                <Button sx={buttonStyle} variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </Grid>

            <Grid container spacing={2} sx={{ justifyContent: 'flex-end' }}>
                <Grid item xs={2} sx={{ justifyContent: "flex-end", display: "flex" }}>
                        <Avatar sx={{ width: 56, height: 56 }}>H</Avatar>
                </Grid>
                <Grid item xs={10}>
                    <TextField fullWidth
                        id="filled-multiline-static fullWidth"
                        label="Multiline fullWidth"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="filled"
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ justifyContent: 'flex-end' }}>
                <Grid item xs={2} sx={{ justifyContent: "flex-end", display: "flex" }}>
                        <Avatar sx={{ width: 56, height: 56 }}>H</Avatar>
                </Grid>
                <Grid item xs={10}>
                    <TextField fullWidth
                        id="filled-multiline-static fullWidth"
                        label="Multiline fullWidth"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="filled"
                    />
                </Grid>
                
            </Grid>
            
        </Stack>
    )
}

export default UserHomepage