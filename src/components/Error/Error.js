import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1 className='text-5xl font-semibold p-4 text-center'>No Page Found | Go To <Link to="/">Home</Link></h1>
        </div>
    );
};

export default Error;