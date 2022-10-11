import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';


const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className='w-11/12 m-auto'>
            <h1 className='text-3xl font-semibold p-5 my-3 '>All Blogs</h1>
            <div className='mb-20'>
                {
                    blogs.map(blog => <Blog blog = {blog}></Blog>)
                }
            </div>
        </div>
        
    );
};

export default Blogs;