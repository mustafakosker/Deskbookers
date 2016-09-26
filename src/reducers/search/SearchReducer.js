import actionTypes from 'constants/actionTypes';

const initialState = {
  isLoading: false,
  results: [],
  carouselImages: [
    {
      url: 'https://officesnapshots.com/wp-content/uploads/2016/01/cbre-office-design-9.jpg',
      title: 'London'
    },
    {
      url: 'http://tech.eu/wp-content/uploads/2015/05/SAM_3618.jpg',
      title: 'Amsterdam'
    },
    {
      url: 'http://soundcloud-wpengine.netdna-ssl.com/wp-content/uploads/2014/06/SoundCloud-new-Berlin-Office-3.jpg',
      title: 'Berlin'
    }
  ],
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
