import { FC, useContext } from 'react'
import { List, Drawer, Box, Typography, ListItemIcon, ListItemButton, ListItemText, Divider } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import { UIContext } from '../../context/ui';


const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Draf'];

export const SideBar: FC = () => {

    const { sidemenuOpen, onCloseSideMenu } = useContext(UIContext)


    return (
        <Drawer
            anchor='left'
            open={sidemenuOpen}
            onClose={onCloseSideMenu}
        >

            <Box sx={{ width: 200 }} >

                <Box sx={{ padding: '5px 10px' }} >
                    <Typography variant='h4' align='center'  > Menu</Typography>
                </Box>

                <Divider />


                <List>
                    {
                        menuItems.map((text, i) => (
                            <ListItemButton key={i}  >
                                <ListItemIcon>
                                    {i % 2 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        ))
                    }
                </List>

                <Divider />

                <List>
                    {
                        menuItems.map((text, i) => (
                            <ListItemButton key={i}  >
                                <ListItemIcon>
                                    {i % 2 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        ))
                    }
                </List>

            </Box>
        </Drawer >
    )
}
