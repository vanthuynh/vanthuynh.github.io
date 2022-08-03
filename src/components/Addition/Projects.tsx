import * as React from 'react';
import { Box, Stack } from '@mui/material';
import { ProjectCard } from './ProjectCard';

import ProjectList from './ProjectList';
import Buttons from './Buttons';

export function Projects () {
    const [item, setItem] = React.useState(ProjectList);

  const menuItems = [...new Set(ProjectList.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = ProjectList.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <Box display={"flex"} flexDirection={"column"} marginTop={"50px"}>
        <Stack>
            <h1 className="text-3xl font-bold underline">
                Projects
            </h1>
            <Buttons 
                filterItem={filterItem} 
                setItem={setItem}
                menuItems={menuItems}
            />
        </Stack>
        <Stack direction="column" spacing={2}>
            {item.map((project, i) => (
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