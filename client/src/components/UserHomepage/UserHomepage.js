import Box from "@mui/material/Box"
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { borders } from '@mui/system';

const UserHomepage = (props) => {
    const postBox = {
        width: "95%",
        height: "100%",
        bgcolor: "warning.main",
        margin: "auto"
    }
    return (
        <Box sx={postBox}>
            <div>
                <h1>hi</h1>
            </div>
        </Box>
    )
}

export default UserHomepage