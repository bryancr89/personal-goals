import * as types from '../constants/loginActionsTypes';

export function loginSubmit() {
  return function (dispatch) {
    return dispatch({
      type: types.LOGIN_REQUEST,
      movies: _.values(snapshot.val())
    });
  };
};