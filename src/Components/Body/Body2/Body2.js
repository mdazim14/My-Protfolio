import React from 'react';
import azimP1 from '../../../images/azimP1.png';
import { PolarArea } from 'react-chartjs-2';

const data = {
    labels: ['CSS', 'HTML', 'JavaScript', 'ReactJS', 'Redux', 'TypeScript'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
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
                    <img className="img-fluid" src={azimP1} alt="" />
                </div>

                <div className="col-6 d-flex">

                    <div className=" col-8 bg-white border">
                       
                            <div className='header'>
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