import * as React from 'react';
import { Box, Stack } from '@mui/material';
import { ProjectCard } from './ProjectCard';

import proj1 from '../../img/weater-react-app-animation.gif';

const ProjectList = [
    {
        id:"1",
        title:"Virtual Reality - Bug Collector",
        category:"Backend",
        img:`${proj1}`,
        description:"blabla",
    },
    {
        id:"2",
        title:"Bug Tracker",
        category:"Frontend",
        img:`${proj1}`,
        description:"blabla",
    },
    {
        id:"3",
        title:"Message App",
        category:"Backend",
        img:`${proj1}`,
        description:"blabla",
    },
]

export function Projects () {
  return (
    <Box display={"flex"}>
        <Stack direction="column" spacing={2}>
            {ProjectList.map((project, i) => (
                <ProjectCard 
                    key={i} 
                    id={project.id} 
                    title={project.title}
                    category={project.category}
                    img={project.img} 
                    description={project.description} 
                />
            ))}
        </Stack>
    </Box>
  );
}