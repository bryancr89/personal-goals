import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/loginActions';
import LoginForm from '../components/login/loginForm';

export const LoginPage = (props) => {
  return (
    <LoginForm
      onSubmit={props.actions.loginSubmit}
      />
  );
};

LoginPage.proptypes = {
  actions: PropTypes.object.isRequired,
  userLogin: PropTypes.object.isRequired
};

function mapStateToProps (state) {
  return {
    userLogin: state.userLogin
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);