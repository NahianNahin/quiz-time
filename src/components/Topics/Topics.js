import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizs from '../Quizs/Quizs';

const Topics = () => {
    const quizs = useLoaderData();
    console.log(quizs);
    
    return (
        <div>
            
            <Quizs quizs={quizs.data}></Quizs>
        </div>
    );
};

export default Topics;