import React from 'react';
import azimP1 from '../../../images/azimP1.png';
import { PolarArea } from 'react-chartjs-2';
import 'aos/dist/aos.css';


const data = {
    labels: ['CSS', 'HTML', 'JavaScript', 'ReactJS', 'Redux', 'TypeScript'],
    datasets: [
        {
            label: '# of Votes',
            data: [75, 85, 65, 55, 25, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
            ],
            borderWidth: 1,
        },
    ],
};

const Body2 = () => {
    return (
        <div className="bg-dark">
            <h1 className="d-flex justify-content-center text-warning"> <h1 className="text-white">ABOUT_</h1>  ME</h1>
            <div className="p-5 d-flex bg-dark text-white">

                <div className="col-6">
                    <img data-aos="fade-left" data-aos-duration="2000" className="img-fluid" src={azimP1} alt="" />
                    <h4 className="pt-5">  I'm A Front-end Web-Developer. </h4>
                    <p>I have Serious passion for making Interactive Websites. <br/> Currently I am working with React.Js .</p>
                    <h5 data-aos="fade-up" data-aos-duration="2000" className="border border-warning w-25 p-3 mt-5 d-inline-block">Download Resume</h5>
                </div>

                <div className="col-6 d-flex">

                    <div data-aos="zoom-in" data-aos-duration="2000" className="col-8 bg-white border">

                        <div className='header '>
                            <div className='links'>
                                <a
                                    className='btn btn-gh'
                                    href='https://github.com/mdazim14'
                                >
                                    Github Source
                                </a>
                            </div>
                        </div>
                        <PolarArea data={data} />



                    </div>

                </div>

            </div>
        </div>

    );
};

export default Body2;