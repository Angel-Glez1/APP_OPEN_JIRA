import { Box } from '@mui/material'
import Head from 'next/head'
import { FC, ReactElement } from 'react'
import { Navbar, SideBar } from '../ui';


interface Props {
    title?: string,
    children: ReactElement | ReactElement[];
}

const Layout: FC<Props> = ({ title, children }) => {
    return (
        <Box sx={{ flexFlow: 1 }} >
            <Head>
                <title>{title || 'open jira'}</title>
            </Head>

            <Navbar />
            <SideBar />

            <Box sx={{ padding: '10px 20px' }}>
                {children}
            </Box>

        </Box>
    )
}

export { Layout }