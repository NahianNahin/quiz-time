import React from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = ({quiz}) => {
    const {id,name,logo,total} = quiz;
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/quiz/${id}`)
    }
    return (
        <div >
            <div className="card  bg-slate-100 shadow-xl">
                <figure className="px-3 pt-3">
                    <img src={logo} alt="Shoes" className="rounded-xl"/>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Total Question : {total}</p>
                    <div className="card-actions">
                        <button onClick={handleNavigate} className="btn btn-wide btn-sm">Start Quiz</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;