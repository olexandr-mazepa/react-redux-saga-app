import { CREATE_POST } from "./types"
import { showAlert } from "./actions";

const forbiddenWords = ['fuck', 'spam', 'php'];

export function forbiddenWordsMiddleware({dispatch}) {
  return function(next) {
    return function(action){
      if (action.type === CREATE_POST){
        const found = forbiddenWords.filter((w) =>
          action.payload.title.includes(w)
        );

        if(found.length){
          return dispatch(showAlert("Don't use forbidden words"))
        }
      }
      return next(action);
    }
  }
}