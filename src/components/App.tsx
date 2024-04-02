import '../style/App.css'
import Portfolio from "./Portfolio.tsx";
import {CssBaseline} from "@mui/material";
import {useCallback} from "react";
import type {Container, Engine} from "tsparticles-engine";
import Particles from "react-tsparticles";
import {loadSlim} from "tsparticles-slim";
import theme from "../theme/theme.tsx";

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
        await console.log(container);
    }, []);

    return (
        <>
            <Particles id="tsparticles"
                       init={particlesInit}
                       loaded={particlesLoaded}
                       options={{
                           // background: {
                           //     color: {
                           //         value: "#0d47a1",
                           //     },
                           // },
                           fpsLimit: 120,
                           interactivity: {
                               events: {
                                   onClick: {
                                       enable: true,
                                       mode: "push",
                                   },
                                   onHover: {
                                       enable: true,
                                       mode: "repulse",
                                   },
                                   resize: true,
                               },
                               modes: {
                                   bubble: {
                                       distance: 400,
                                       duration: 2,
                                       opacity: 0.8,
                                       size: 40,
                                   },
                                   grab: {
                                       distance: 400,
                                       line_linked: {
                                           opacity: 1,
                                       },
                                   },
                                   push: {
                                       quantity: 4,
                                   },
                                   remove: {
                                       quantity: 2,
                                   },
                                   trail: {
                                       delay: 0.005,
                                       quantity: 5,
                                       particles: {
                                           color: theme.palette.primary.main,
                                           shape: {
                                               type: "circle",
                                           },
                                           size: 5,
                                       },
                                   },

                                   repulse: {
                                       distance: 300,
                                       duration: 0.4,
                                   },
                               },
                           },
                           particles: {
                               color: {
                                   value: '#f3e80d',
                               },
                               links: {
                                   color: theme.palette.primary.main,
                                   distance: 200,
                                   enable: true,
                                   opacity: 0.2,
                                   width: 5,
                               },
                               move: {
                                   direction: "none",
                                   enable: true,
                                   outModes: {
                                       default: "out",

                                   },

                                   random: true,
                                   speed: 1,
                                   straight: false,
                               },
                               number: {
                                   density: {
                                       enable: true,
                                       area: 800,
                                   },
                                   value: 15,
                               },
                               opacity: {
                                   value: 0.5,
                               },
                               shape: {
                                   type: ["star"],
                               },
                               size: {
                                   value: {min: 4, max: 6},
                               },
                               zIndex: {
                                   value: -1,
                               }
                           },
                           detectRetina: true,
                           zLayers: 2,
                       }}
                       style={{position: 'fixed', zIndex: -1}} // Add this line
            />
            <CssBaseline/>
            <Portfolio/>
        </>
    );
}

export default App