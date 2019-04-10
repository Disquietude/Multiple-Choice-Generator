import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
  editQuestionLabel, 
  editQuestionDescription,
  deleteQuestion,
  addOption,
  deleteOption
} from '../redux/actions/actions';

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionInput: ''
    };
    this.changeOptionInput = this.changeOptionInput.bind(this);
    this.submitOption = this.submitOption.bind(this);
  }

  changeOptionInput(e) {
    this.setState({
      optionInput: e.target.value
    });
  }

  submitOption(e) {
    let newOption = this.state.optionInput;
    this.props.addOption(this.props.index, newOption);
    this.setState({
      optionInput: ''
    });
    e.preventDefault();
  }

  render() {
    let optionsList = null;
    
    if (this.props.question.options.length > 0) {
      optionsList = this.props.question.options.map((curr, index) => (
        <div className='question-form__options-list-item' key={index}>
          <span>{curr}</span>
          <button
            className='question-form__delete-option'
            onClick={(e) => this.props.deleteOption(this.props.index, index)}
          >
            <FontAwesomeIcon icon='trash' size='lg'/>
          </button>
        </div>
      ))
    }

    return (
      <div className='form-box'>
        <input
          className='form-box__input'
          type='text'
          placeholder='Question'
          value={this.props.question.label}
          onChange={(e) => this.props.editQuestionLabel(this.props.index, e.target.value)}
        />
        <input
          className='form-box__input' 
          type='text'
          placeholder='Question Description (Optional)'
          value={this.props.question.description}
          onChange={(e) => this.props.editQuestionDescription(this.props.index, e.target.value)}
        />
        {optionsList}
        <form className='question-form__options-form' onSubmit={this.submitOption}>
          <input
            className='form-box__input' 
            type='text'
            placeholder='Add Options'
            value={this.state.optionInput}
            onChange={this.changeOptionInput}
          />
          <div className='question-form__options-controls'>
            <button className='button button--add' type='submit'>Add Option</button>
            <button 
              className='button button--delete' 
              type='button'
              onClick={(e) => this.props.deleteQuestion(this.props.index)}
            >
              Delete Question
            </button>
          </div>
        </form>
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editQuestionLabel: (index, input) => dispatch(editQuestionLabel(index, input)),
  editQuestionDescription: (index, input) => dispatch(editQuestionDescription(index, input)),
  deleteQuestion: (index) => dispatch(deleteQuestion(index)),
  addOption: (index, input) => dispatch(addOption(index, input)),
  deleteOption: (questionIndex, optionIndex) => dispatch(deleteOption(questionIndex, optionIndex))
});

export default connect(null, mapDispatchToProps)(QuestionForm);