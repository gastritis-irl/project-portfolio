// src/components/Portfolio.tsx
import {Box, Card, CardContent, Grid, Typography} from '@mui/material';

const Portfolio = () => {
    const projects = [
        {
            name: 'SportGH',
            description: 'This is a sports equipments renting platform providing a wide range of sports equipments from users to users.'
        },
        {name: 'Project 2', description: 'This is project 2'},
        // Add more projects here
    ];

    return (
        <Box sx={{flexGrow: 1, m: 2}}>
            <Typography variant="h4" component="div" gutterBottom>
                Bardocz Ferencz-Csaba
            </Typography>
            <Typography variant="body1" gutterBottom>
                A brief introduction about yourself.
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
                Projects
            </Typography>
            <Grid container spacing={2}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{maxWidth: 345, backgroundColor: 'background.paper', color: 'text.primary'}}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {project.name}
                                </Typography>
                                <Typography variant="body2">
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Portfolio;