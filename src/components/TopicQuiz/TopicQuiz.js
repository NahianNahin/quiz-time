import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicQuiz = () => {
    const quiz = useLoaderData();
    const {logo,questions,} = quiz;
    return (
        <div>
            
        </div>
    );
};

export default TopicQuiz;