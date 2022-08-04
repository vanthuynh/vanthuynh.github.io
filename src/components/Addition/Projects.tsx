import * as React from 'react';
import { Box, Stack } from '@mui/material';
import { ProjectCard } from './ProjectCard';

import ProjectList from './ProjectList';
import Buttons from './Buttons';

export function Projects () {
  // https://www.freecodecamp.org/news/how-to-make-a-filter-component-in-react/
    const [item, setItem] = React.useState(ProjectList);

  const menuItems = [...new Set(ProjectList.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = ProjectList.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <Box 
      display={"flex"} 
      flexDirection={"column"} 
      marginTop={"50px"}
      minHeight={"100vh"}
      maxWidth={"100vw"}
      // bgcolor={"red"}
    >
        <Stack>
            <h1 className="tw-text-3xl tw-font-bold tw-underline">
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
                    live={project.live}
                />
            ))}
        </Stack>
    </Box>
  );
}