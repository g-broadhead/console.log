import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import InfoIcon from '@mui/icons-material/Info'
import { Container } from '@mui/material'

const AppFooter = (props) => {
  const footerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    borderTop: '1px solid #AAA',
    marginTop: '2em',

    // fixed footer??
    bottom: '0',
    // position: 'absolute',
    bgcolor: 'primary.main',
    width: '100%'
  }
  return (
    <Box sx={footerStyle}>
      <div>&nbsp;</div>
      <div>
        <strong>console.log</strong><br />
        <sub>Copyright 2022 &copy;</sub>
      </div>
      <div>
        <List>
          <ListItem>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText><a href='/about'>About</a></ListItemText>
          </ListItem>
        </List>
      </div>
    </Box>
  )
}

export default AppFooter
