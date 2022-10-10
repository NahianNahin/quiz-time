import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Graph from '../Graph/Graph';

const Statistic = () => {
    const data = useLoaderData();
    return (
        <div className='w-11/12 m-auto'>
            <h1 className='md:text-4xl font-semibold p-14 text-center'>The Graph Between Topic Name VS Amount of Quiz Quistion.</h1>
            <Graph data={data.data}></Graph>

        </div>
    );
};

export default Statistic;