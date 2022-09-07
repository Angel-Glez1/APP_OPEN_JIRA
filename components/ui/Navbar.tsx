import { FC, useContext } from 'react';
import NextLink from 'next/link';
import { AppBar, Toolbar, IconButton, Typography, Link } from '@mui/material';


import MenuIcon from '@mui/icons-material/Menu';
import { UIContext } from '../../context/ui/UIContext';

export const Navbar: FC = () => {

    const { onOpenSideMenu } = useContext(UIContext);

    return (
        <AppBar>
            <Toolbar >
                <IconButton size='large' edge='start' onClick={onOpenSideMenu} >
                    <MenuIcon />
                </IconButton>

                <NextLink href='/' passHref >
                    <Link underline='none' color='white'>
                        <Typography variant='h6'>OpenJira</Typography>
                    </Link>
                </NextLink>
            </Toolbar>
        </AppBar>
    )
}
