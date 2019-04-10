import React from 'react';
import { connect } from 'react-redux';

import { editQuestionLabel, editQuestionDescription } from '../redux/actions/actions';

const QuestionForm = (props) => (
  <div className='form-box'>
    <input
      className='form-box__input'
      type='text'
      placeholder='Question'
      value={props.question.label}
      onChange={(e) => props.editQuestionLabel(props.index, e.target.value)}
    />
    <input
      className='form-box__input' 
      type='text'
      placeholder='Question Description (Optional)'
      value={props.question.description}
      onChange={(e) => props.editQuestionDescription(props.index, e.target.value)}
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  editQuestionLabel: (index, input) => dispatch(editQuestionLabel(index, input)),
  editQuestionDescription: (index, input) => dispatch(editQuestionDescription(index, input))
});

export default connect(null, mapDispatchToProps)(QuestionForm);