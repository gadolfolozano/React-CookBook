import { connect } from 'react-redux';
import {
  showCreateRecipe,
  hideCreateRecipe,
} from '../actions';
import { CreateRecipe } from '../components';

const mapStateToProps = state => ({
  mustShowCreateRecipe: state.createRecipe.mustShowCreateRecipe,
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  showCreateRecipe: () => dispatch(showCreateRecipe()),
  hideCreateRecipe: () => dispatch(hideCreateRecipe()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateRecipe);
