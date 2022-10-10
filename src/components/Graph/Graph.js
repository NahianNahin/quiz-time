import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Graph = ({ data }) => {
    console.log(data);

    return (
        <div className='flex align-center justify-around mb-10'>

            <LineChart width={800} height={400} data={data}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
            <Tooltip />
        </div>
    );
};

export default Graph;
