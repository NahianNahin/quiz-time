import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const TopicQuiz = () => {
    const quiz = useLoaderData();
    
    const {questions,name} = quiz.data;
    
    return (
        <div>
            <h1 className='text-5xl font-semibold p-4 text-center mt-10'>The Quiz question is about {name}</h1>
            <h1 className='text-xl font-semibold p-4 text-center '>Now try to answer the question below.</h1>
            <div className='flex flex-col gap-6 justify-center items-center mb-7'>
                {
                    questions.map(ques =><QuizQuestion key={ques.id} ques={ques}></QuizQuestion>)
                }
            </div>
        </div>
    );
};

export default TopicQuiz;