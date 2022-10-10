import React from 'react';
import Image from "../../Study.png"

const HeadingSection = () => {
    return (
        <div className='flex w-11/12 m-auto '>
            <div>
                <h1>Study & Quiz</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt repellendus minus sequi magni ipsa illo? Tenetur fugit iure recusandae?</p>
            </div>
            <div>
                <img src={Image} alt="" />
            </div>
        </div>
    );
};

export default HeadingSection;