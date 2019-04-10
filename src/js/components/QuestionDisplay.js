import React from 'react';

const QuestionDisplay = (props) => {
  let options = null;

  if (props.question.options.length > 0) {
    options = props.question.options.map((curr, index) => (
      <div className='question-display__options-list-item' key={index}>
        <input type='checkbox' />
        {curr}
      </div>
    ))
  }

  return (
    <div className='question-display'>
      <h2 className='question-display__label'>{props.question.label}</h2>
      <p className='question-display__description'>{props.question.description}</p>
      <form className='question-display__options'>
        {options}
      </form>
    </div>
  )
};

export default QuestionDisplay;