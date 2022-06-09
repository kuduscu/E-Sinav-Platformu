import React from 'react'
import './NewQuestion.css';
import QuestionForm from '../QuestionForm/QuestionForm';

const NewQuestion = () => {
  return (
    <div className='new-expense'>
      <QuestionForm />
    </div>
  )
}

export default NewQuestion