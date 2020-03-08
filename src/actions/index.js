import { SAVE_COMMENTS } from './types'

export const saveComment = (comment) => (
  {
    type: SAVE_COMMENTS,
    payload: comment
  }
);