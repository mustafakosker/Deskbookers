import { expect } from 'chai';
import search from 'reducers/search/SearchReducer';
import actionTypes from 'constants/actionTypes';

describe('SearchReducer unit test', () => {
  it('returns initial state when no state is provided', () => {
    const state = search(undefined, {});

    expect(state.results.length).to.equal(0);
    expect(state.errorMessage).to.equal('');
  });

  it('sets results to state when SEARCH_SUCCESS action dispatched', () => {
    const results = [{
      name: 'testresult'
    }];
    const state = search(undefined, {
      type: actionTypes.SEARCH_SUCCESS,
      results
    });

    expect(state.results.length).to.equal(results.length);
    expect(state.results[0].name).to.equal(results[0].name);
    expect(state.errorMessage).to.equal('');
  });
});
