import actionTypes from 'constants/actionTypes';

const initialState = {
  isLoading: false,
  results: [],
  errorMessage: ''
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_SUCCESS:
      return Object.assign({}, state, {
        results: action.results,
        errorMessage: ''
      });
    case actionTypes.SEARCH_FAILED:
      return Object.assign({}, state, {
        results: [],
        errorMessage: action.errorMessage
      });
    case actionTypes.SHOW_LOADING:
      return Object.assign({}, state, {
        isLoading: true
      });
    case actionTypes.HIDE_LOADING:
      return Object.assign({}, state, {
        isLoading: false
      });
    default:
      return state;
  }
}
