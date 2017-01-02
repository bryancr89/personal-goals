import React from 'react';
import {Link} from 'react-router';

const LoginOauth = () => {
  return (
    <div className="oauth-container">
      <h5>Or</h5>
      <div
        className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-js-ripple-effect">
        <i className="icon icon-facebook2"/>
      </div>
      <div
        className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-js-ripple-effect">
        <i className="icon icon-twitter"/>
      </div>
      <div
        className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-js-ripple-effect">
        <i className="icon icon-github "/>
      </div>
    </div>
  );
};

export default LoginOauth;
