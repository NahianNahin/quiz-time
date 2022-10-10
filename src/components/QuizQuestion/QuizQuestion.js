import React from 'react';
import Option from '../Option/Option';
import './QuizQuestion.css';


const QuizQuestion = ({ ques }) => {
    const { options, question, } = ques;
    console.log(question);
    return (
        <div>
            <div className="card width bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Question : {question}</h2>
                    <div className='grid grid-cols-2'>
                        {
                            options.map(answer => <Option answer={answer}></Option>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizQuestion;