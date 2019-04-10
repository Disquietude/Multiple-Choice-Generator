import {
  EDIT_TITLE,
  EDIT_DESCRIPTION
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