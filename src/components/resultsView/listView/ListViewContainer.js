import { connect } from 'react-redux';
import ListView from './ListView.jsx';

const mapStateToProps = state => ({
  items: state.results
});

const ListViewContainer = connect(mapStateToProps)(ListView);

export default ListViewContainer;
