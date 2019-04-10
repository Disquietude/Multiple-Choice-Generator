import {
  EDIT_TITLE,
  EDIT_DESCRIPTION,
  ADD_QUESTION,
  EDIT_QUESTION_LABEL,
  EDIT_QUESTION_DESCRIPTION
  // DELETE_QUESTION,
  // ADD_OPTION,
  // DELETE_OPTION
} from '../actions/types';
import produce from 'immer';

let initialState = {
  title: '',
  description: '',
  questions: []
};

export default (state = initialState, action) => 
  produce(state, draft => {
    switch(action.type) {
      case EDIT_TITLE:
        draft.title = action.input;
        break;
      case EDIT_DESCRIPTION:
        draft.description = action.input;
        break;
      case ADD_QUESTION:
        draft.questions.push({
          label: '',
          description: '',
          options: []
        });
        break;
      case EDIT_QUESTION_LABEL:
        draft.questions[action.index].label = action.input;
        break;
      case EDIT_QUESTION_DESCRIPTION:
        draft.questions[action.index].description = action.input;
        break;
      default:
        return state;
    }
  });