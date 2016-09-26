import searchByCity from 'actionCreators/search/SearchActionCreators';
import actionTypes from 'constants/actionTypes';
import nock from 'nock';
import { expect } from 'chai';
import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

describe('SearchActionCreators unit test', () => {
  const mockStore = configureStore([ReduxThunk]);
  const apiEndpoint = 'https://www.deskbookers.com';
  const url = '/nl-nl/sajax.json?q=Amsterdam&type=-&people=any&favorite=0&pid=&sw=52.293753%2C4.634942&ne=52.455562%2C5.162286&ids=17201%2C19640%2C13692%2C13691%2C12136%2C17938%2C15292%2C14886%2C14885%2C14884%2C14883%2C15730%2C15353%2C15351%2C15330%2C15080%2C17290%2C15454%2C15451%2C15379';

  it('dispatches SEARCH_SUCCESS action when api returns success', () => {
    const store = mockStore({});
    nock(apiEndpoint)
      .get(url)
      .reply(200, {
        rows: []
      });

    return store.dispatch(searchByCity()).then(() => {
      const action = store.getActions()[0];

      expect(action.type).to.equal(actionTypes.SEARCH_SUCCESS);
      expect(action.results.length).to.equal(0);
    });
  });

  it('dispatches SEARCH_SUCCESS action with results when api returns results', () => {
    const row = {
      name: 'LaFayette',
      location_name: 'Het Warenhuis',
      rating: 6.846154,
      hour_price: 2.75,
      image_urls: ['http://testurl']
    };

    nock(apiEndpoint)
      .get(url)
      .reply(200, {
        rows: [row]
      });
    const store = mockStore({});

    return store.dispatch(searchByCity()).then(() => {
      const action = store.getActions()[0];
      const result = action.results[0];

      expect(action.type).to.equal(actionTypes.SEARCH_SUCCESS);
      expect(result.name).to.equal(row.name);
      expect(result.locationName).to.equal(row.location_name);
      expect(result.rating).to.equal(row.rating);
      expect(result.hourPrice).to.equal(row.hour_price);
      expect(result.imageUrl).to.equal(row.image_urls[0]);
    });
  });

  it('dispatches SEARCH_FAILED action when api returns failed', () => {
    nock(apiEndpoint)
      .get(url)
      .reply(503);

    const store = mockStore({});

    return store.dispatch(searchByCity()).then(() => {
      const action = store.getActions()[0];

      expect(action.type).to.equal(actionTypes.SEARCH_FAILED);
    });
  });
});
