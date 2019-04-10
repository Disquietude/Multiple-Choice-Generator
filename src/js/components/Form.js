import React from 'react';
import { connect } from 'react-redux';

import { addQuestion } from '../redux/actions/actions';

import TitleForm from './TitleForm';
import QuestionForm from './QuestionForm';

const Form = (props) => {
  let questionForms = null;

  if (props.questions.length > 0) {
    questionForms = props.questions.map((curr, index) => (
      <QuestionForm 
        key={index}
        index={index}
        question={curr}
      />
    ))
  }

  return (
    <div className='form'>
      <TitleForm />
      {questionForms}
      <button
        className='button button--add'
        onClick={props.addQuestion}
      >Add Question</button>
    </div>
  );
};

const mapStateToProps = state => ({
  questions: state.questions
});

const mapDispatchToProps = dispatch => ({
  addQuestion: () => dispatch(addQuestion())
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);