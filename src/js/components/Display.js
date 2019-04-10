import React from 'react';
import { connect } from 'react-redux';

const Display = (props) => (
  <div className='display'>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
  </div>
);

const mapStateToProps = state => ({
  title: state.title,
  description: state.description,
  questions: state.questions
})

export default connect(mapStateToProps)(Display);