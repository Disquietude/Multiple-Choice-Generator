import React from 'react';
import { connect } from 'react-redux';

import { editTitle, editDescription } from '../redux/actions/actions';

const TitleForm = (props) => (
  <div className='form-box'>
    <input
      className='form-box__input'
      type='text'
      placeholder='Title'
      value={props.title}
      onChange={(e) => props.editTitle(e.target.value)}
    />
    <textarea
      className='form-box__input' 
      placeholder='Form Description'
      value={props.description}
      rows='5'
      onChange={(e) => props.editDescription(e.target.value)}
    />
  </div>
);

const mapStateToProps = state => ({
  title: state.title,
  description: state.description
});

const mapDispatchToProps = dispatch => ({
  editTitle: (input) => dispatch(editTitle(input)),
  editDescription: (input) => dispatch(editDescription(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(TitleForm);