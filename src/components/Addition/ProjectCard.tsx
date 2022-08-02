import * as React from 'react';
import { Box } from '@mui/material';
import './Projects.scss';

export interface  ProjectCardProps {
    id: String,
    title: String,
    category: String,
    img: String,
    description: String,
}

export function ProjectCard (props:  ProjectCardProps) {
  const {id, title, category, img, description } = props;
  return (
    <div className="project p-light" id="p-shooting-ai"> 
        <a className="overlay" href="https://github.com/pdo55/reinforcement-learning-game" target="_blank"> 
            <div className="content vertical-center"> 
                <h4>{id}</h4> 
                <h1>{title}</h1> 
                <p>{description}</p> 
                <button>Explore <span className="arrow"></span></button> 
            </div> 
        </a> 
    </div>
  );
}
