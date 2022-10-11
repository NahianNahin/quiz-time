import React from 'react';
import Option from '../Option/Option';
import './QuizQuestion.css';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuizQuestion = ({ ques }) => {
    const { options, question, correctAnswer } = ques;
    const notify = () => toast(`Correct Answer : ${correctAnswer}`);
    console.log(ques);
    return (
        <div>
            <div className="card w-10/12 bg-base-100 shadow-xl p-5">
                <div className="card-body">
                    <div className='question'>
                        <h2 className="card-title">Question : {question}</h2>
                        <div className='flex justify-center items-center'>
                            <EyeIcon onClick={notify} className="h-6 w-6 text-primary" />
                            <ToastContainer />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 form-control'>
                        {
                            options.map(answer => <Option answer={answer} correctAnswer={correctAnswer}></Option>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizQuestion;