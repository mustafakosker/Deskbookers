import actionTypes from 'constants/actionTypes';
import axios from 'axios';

const searchUrl = 'https://www.deskbookers.com/nl-nl/sajax.json?q=Amsterdam&type=-&people=any&favorite=0&pid=&sw=52.293753%2C4.634942&ne=52.455562%2C5.162286&ids=17201%2C19640%2C13692%2C13691%2C12136%2C17938%2C15292%2C14886%2C14885%2C14884%2C14883%2C15730%2C15353%2C15351%2C15330%2C15080%2C17290%2C15454%2C15451%2C15379';

function showLoading() {
  return {
    type: actionTypes.SHOW_LOADING
  };
}

function hideLoading() {
  return {
    type: actionTypes.HIDE_LOADING
  };
}

function searchSuccess(results) {
  return {
    type: actionTypes.SEARCH_SUCCESS,
    results
  };
}

function searchFailed(errorMessage) {
  return {
    type: actionTypes.SEARCH_FAILED,
    errorMessage
  };
}

export default function searchByCity() {
  return (dispatch) => {
    dispatch(showLoading());

    axios.get(searchUrl)
      .then((response) => {
        const results = response.data.rows.filter(row =>
          row.name && row.image_urls && row.image_urls.length > 0 &&
          row.location_name && row.rating && row.hour_price).map(row => ({
            name: row.name,
            locationName: row.location_name,
            rating: row.rating,
            hourPrice: row.hour_price,
            imageUrl: row.image_urls[0]
          }));

        dispatch(hideLoading());
        dispatch(searchSuccess(results));
      }).catch((error) => {
        console.error(error);
        dispatch(hideLoading());
        dispatch(searchFailed(error.message));
      });
  };
}
