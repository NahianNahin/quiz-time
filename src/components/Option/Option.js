import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({answer,correctAnswer}) => {
    const [ans,setAns] = useState('');
    const notify = (show) => toast(show);


    const handleQheck = () => {
        setAns(answer);
        if(ans === correctAnswer){
            notify('The answer is correct');
            <ToastContainer />
        }
        else{
            notify('The answer is incorrect');
            <ToastContainer />
        }
        
    }
    return (
        <div className='flex gap-2 p-3 items-center'>
            <input type="radio" name="radio-2" value={answer} className="radio radio-primary" onClick={handleQheck}/>
            <p>{answer}</p>
            
        </div>
    );
};

export default Option;