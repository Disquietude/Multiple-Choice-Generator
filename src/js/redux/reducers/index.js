import {
  EDIT_TITLE,
  EDIT_DESCRIPTION
} from '../actions/types';
import produce from 'immer';

let initialState = {
  title: 'Title',
  description: 'Form Description',
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
      default:
        return state;
    }
  });