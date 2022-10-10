import React from 'react';
import Quiz from '../Quiz/Quiz';

const Quizs = ({quizs}) => {
    console.log(quizs.length);
    return (
        <div>
            <h1 className='text-5xl font-semibold p-4'>All Quizs </h1>
            <div className='grid grid-cols-3 gap-6 my-10'>
            {
                quizs.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
        </div>
        </div>
    );
};

export default Quizs;