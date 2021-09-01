import React from 'react';
import azimP1 from '../../../images/azimP1.png';

const Body1 = () => {
    return (
        <div className="p-5 d-flex bg-info justify-content-center">
            <div className="col-6 border-bottom border-warning p-5">
                <h1>Hi! I'm</h1>
                <h1>Md Azim Howlader</h1>
                <h5>JavaScript Developer</h5>
                <p>A self-motivated and enthusiastic web developer. To gain confidence and fame using my potential in the field of web development and express my innovative creative skills for self and company growth. I always like to learn new things and have experience with new stuff.</p>
            </div>
            <div className="col-6 border-top border-warning">
                <img className="img-fluid" src={azimP1} alt="" />
            </div>
        </div>
    );
};

export default Body1;