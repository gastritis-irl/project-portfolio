import '../style/App.css'
import Portfolio from "./Portfolio.tsx";
import {Container, CssBaseline} from "@mui/material";

function App() {
    return (
        <Container
                   sx={{
                       display: 'flex',
                       flexDirection: 'column',
                       minHeight: '100vh',
                       width: '100%',
                       bgcolor: 'background.default',
                       color: 'text.primary',
                       alignItems: 'flex-start',
                       justifyContent: 'flex-start'
                   }}
        >
            <CssBaseline/>
            <Portfolio/>
        </Container>
    )
}

export default App
