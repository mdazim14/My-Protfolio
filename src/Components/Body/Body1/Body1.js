import React from 'react';
import { useEffect } from 'react';
import azimP1 from '../../../images/azimP1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Body1.css';


const Body1 = () => {
    useEffect(() => {
        AOS.init();
    });
    return (
        
            <div className="p-5 d-flex bg-dark text-white justify-content-center">
                <div data-aos="fade-right" data-aos-duration="2000" className="col-6 mt-4 mb-4 p-5 border-top border-bottom border-warning text-left">
                    <h1>Hi! I'm</h1>
                    <h1>Md Azim Howlader</h1>
                    <h2 className="textAnimation text-warning">Front-end React Developer</h2>
                    <p>A self-motivated and enthusiastic web developer. To gain confidence and fame using my potential in the field of web development and express my innovative creative skills for self and company growth. I always like to learn new things and have experience with new stuff.</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" className="col-6 mt-4 mb-4 p-5 border-bottom border-top border-warning">
                    <img  className=" img-fluid" src={azimP1} alt="" />
                </div>
            </div>
        
    );
};

export default Body1;