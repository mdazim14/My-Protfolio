import React from 'react';
import ProjectCard1 from './ProjectCard1/ProjectCard1';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
    return (
        <div className="bg-dark pt-5 text-white">
            <h1 style={{ textDecoration: "underline" }} className="">PROJECTS</h1>
            <div className="d-flex p-5 mt-5 justify-content-center">
                <div data-aos="zoom-in-right" data-aos-duration="2000" className="m-2 col-3 "><ProjectCard1></ProjectCard1></div>
                <div data-aos="zoom-in" data-aos-duration="2000" className="m-2 col-3 "><ProjectCard1></ProjectCard1></div>
                <div data-aos="zoom-in-left" data-aos-duration="2000" className="m-2 col-3 "><ProjectCard1></ProjectCard1></div>
            </div>
            <h5 className="p-2 border d-inline-block">See all projects</h5>
        </div>
    );
};

export default Project;