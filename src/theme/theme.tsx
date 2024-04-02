import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#90f9ed',
        },
        secondary: {
            main: '#0a0e56',
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
        h4: {
            fontWeight: 600,
        },
        h5: {
            fontWeight: 500,
        },
        h6: {
            fontWeight: 400,
        },
    },
});

export default theme;