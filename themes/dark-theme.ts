import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors'

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#ccc' },
        error: { main: red.A400 },
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
                position: 'static'
            },
            styleOverrides: {
                root: {
                    background: '#313A40'
                }
            }
        },

    }
});