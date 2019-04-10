import React from 'react';

const QuestionDisplay = (props) => {
  return (
    <div className='question-display'>
      <h2>{props.question.label}</h2>
      <p>{props.question.description}</p>
    </div>
  )
};

export default QuestionDisplay;