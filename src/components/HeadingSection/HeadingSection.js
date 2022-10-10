import React from 'react';
import Image from "../../Study.png"
import './HeadingSection.css';

const HeadingSection = () => {
    return (
        <div className='flex  items-center gap-10'>
            <div>
                <h1 className='text-5xl font-semibold p-4 text-center'>Study & Quizs</h1>
                <p className=' font-light p-4'>A quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of subjects. Quizzes can be used as a brief assessment in education and similar fields to measure growth in knowledge, abilities, or skills.</p>
            </div>
            <div className='image'>
                <img src={Image} alt="" />
            </div>
        </div>
    );
};

export default HeadingSection;