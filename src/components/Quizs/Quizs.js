import React from 'react';
import Quiz from '../Quiz/Quiz';

const Quizs = ({quizs}) => {
    console.log(quizs.length);
    return (
        <div className='w-11/12 m-auto'>
            <h1 className='text-5xl font-semibold p-4'>All Quizs </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20'>
            {
                quizs.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
        </div>
        </div>
    );
};

export default Quizs;