import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeadingSection from '../HeadingSection/HeadingSection';
import Quizs from '../Quizs/Quizs';

const Home = () => {
    const quizs = useLoaderData();
    return (
        <div>
            <HeadingSection></HeadingSection>
            <Quizs quizs={quizs.data}></Quizs>
        </div>
    );
};

export default Home;