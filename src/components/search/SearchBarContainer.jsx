import { connect } from 'react-redux';
import searchByCity from 'actionCreators/search/SearchActionCreators';
import SearchBar from './SearchBar.jsx';

const mapDispatchToProps = dispatch => ({
  search: city => dispatch(searchByCity(city))
});

const SearchBarContainer = connect(null, mapDispatchToProps)(SearchBar);

export default SearchBarContainer;
