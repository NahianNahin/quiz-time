import React from 'react';

const Option = ({answer}) => {
    return (
        <div className='flex gap-2 p-3 items-center'>
            <input type="radio" name="radio-2" className="radio radio-primary" />
            <p>{answer}</p>
        </div>
    );
};

export default Option;