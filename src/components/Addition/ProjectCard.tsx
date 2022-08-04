import * as React from 'react';
import { Box } from '@mui/material';
import './Projects.scss';

export interface  ProjectCardProps {
    id: string,
    title: string,
    category: string,
    img: string,
    description: string,
    live: string
}

export function ProjectCard (props:  ProjectCardProps) {
  const {id, title, category, img, description, live } = props;
  return (
    <div 
      className="project p-light" 
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}> 
        <a className="overlay" href={`${live}`} target="_blank"> 
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
