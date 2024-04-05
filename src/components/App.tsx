import '../style/App.css'
import Portfolio from "./Portfolio.tsx";
import {CssBaseline} from "@mui/material";
import {useCallback} from "react";
import type {Container, Engine} from "tsparticles-engine";
import Particles from "react-tsparticles";
import particlesConfig from "../config/particlesConfig.ts";
import {loadSlim} from "tsparticles-slim";

function App() {

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        console.log(container);
    }, []);

    return (
        <>
            <Particles id="tsparticles"
                       init={particlesInit}
                       loaded={particlesLoaded}
                       options={{...particlesConfig}}
                       style={{position: 'fixed', zIndex: -2}} // Add this line
            />
            <CssBaseline/>
            <Portfolio/>
        </>
    );
}

export default App