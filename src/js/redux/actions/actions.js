import {
  EDIT_TITLE,
  EDIT_DESCRIPTION,
  ADD_QUESTION,
  DELETE_QUESTION,
  EDIT_QUESTION_LABEL,
  EDIT_QUESTION_DESCRIPTION,
  ADD_OPTION,
  DELETE_OPTION
} from './types';

export function editTitle(input) {
  return {
    type: EDIT_TITLE,
    input: input
  };
}

export function editDescription(input) {
  return {
    type: EDIT_DESCRIPTION,
    input: input
  };
}

export function addQuestion() {
  return {
    type: ADD_QUESTION
  };
}

export function deleteQuestion(index) {
  return {
    type: DELETE_QUESTION,
    index: index
  };
}

export function editQuestionLabel(index, input) {
  return {
    type: EDIT_QUESTION_LABEL,
    index: index,
    input: input
  };
}

export function editQuestionDescription(index, input) {
  return {
    type: EDIT_QUESTION_DESCRIPTION,
    index: index,
    input: input
  };
}

export function addOption(index, input) {
  return {
    type: ADD_OPTION,
    index: index,
    input: input
  };
}

export function deleteOption(questionIndex, optionIndex) {
  return {
    type: DELETE_OPTION,
    questionIndex: questionIndex,
    optionIndex: optionIndex
  };
}