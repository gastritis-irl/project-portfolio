import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#206a5d',
        },
        secondary: {
            main: '#81b214',
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