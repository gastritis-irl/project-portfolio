import theme from "../theme/theme.tsx";

const particlesConfig: object = {
    background: {
        color: {
            value: 'inherit'
        },
    },
    fpsLimit: 60,
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
                distance: 200,
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
    },
    detectRetina: true,
    zLayers: 2,
};

export default particlesConfig;
