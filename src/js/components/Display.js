import React from 'react';
import { connect } from 'react-redux';

import QuestionDisplay from './QuestionDisplay';

const Display = (props) => {
  let questions = null;

  if (props.questions.length > 0) {
    questions = props.questions.map((curr, index) => (
      <QuestionDisplay 
        key={index}
        question={curr}
      />
    ))
  }

  return (
    <div className='display'>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      {questions}
    </div>
  )
};

const mapStateToProps = state => ({
  title: state.title,
  description: state.description,
  questions: state.questions
})

export default connect(mapStateToProps)(Display);