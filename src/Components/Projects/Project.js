import React from 'react';
import ProjectCard1 from './ProjectCard1/ProjectCard1';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectModel from './ProjectModal';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Project = () => {
    return (
        <div className="bg-dark pt-5 text-white">
            <div className="text-center">
            <h1><u>PROJECTS</u></h1>
            </div>
            <div className="d-flex p-5 mt-5 justify-content-center">
                <div data-aos="zoom-in-right" data-aos-duration="1000" className="m-2 col-3  p-5 "><ProjectCard1></ProjectCard1></div>
                <div data-aos="zoom-in" data-aos-duration="1000" className="m-2 col-3 p-5"><ProjectCard1></ProjectCard1></div>
                <div data-aos="zoom-in-left" data-aos-duration="1000" className="m-2 col-3  p-5"><ProjectCard1></ProjectCard1></div>
            </div>
            <ProjectModel></ProjectModel>
            
        </div>
    );
};

export default Project;