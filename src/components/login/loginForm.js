import React, {Component, PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';

import './loginForm.scss';
import LoginOauth from './loginOauth';

class LoginForm extends Component {
  render() {
    const {handleSubmit} = this.props;
    return (
      <div id="login-page" className="mdl-card mdl-shadow--6dp">
        <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
          <h2 className="mdl-card__title-text">Login</h2>
        </div>
        <form onSubmit={handleSubmit} className="mdl-card__supporting-text">
          <div className="mdl-textfield mdl-js-textfield">
            <Field
              name="email"
              className="mdl-textfield__input"
              component="input"
              type="email"/>
            <label className="mdl-textfield__label" htmlFor="email">Email</label>
          </div>
          <div className="mdl-textfield mdl-js-textfield">
            <Field
              name="password"
              className="mdl-textfield__input"
              component="input"
              type="password"/>
            <label className="mdl-textfield__label" htmlFor="password">Password</label>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <div className="mdl-layout-spacer"></div>
            <button
              className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
              type="submit">Log in</button>
          </div>
        </form>
        <LoginOauth/>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequred
};

// Decorate the form component
LoginForm = reduxForm({
  form: 'loginForm' // a unique name for this form
})(LoginForm);

export default LoginForm;