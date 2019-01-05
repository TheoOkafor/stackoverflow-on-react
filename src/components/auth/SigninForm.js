import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import { signin } from '../../actions/authActions';


class SigninForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      message: '',
      style: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.signinHandler = this.signinHandler.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const checkUser = this.props.payload === nextProps.payload;
    if (!checkUser) {
      if (nextProps.payload.statusCode === 200) {
        this.setState({
          message: nextProps.payload.message,
        });
        localStorage.setItem(
          'username',
          nextProps.payload.data.username
        );
        localStorage.setItem(
          'userid',
          nextProps.payload.data.userID
        );
        localStorage.setItem(
          'x-access-token',
          nextProps.payload.data['x-access-token']
        );
        window.location.reload();
      }
      this.setState({
        message: nextProps.payload.error,
        style: 'visible'
      });
      return true;
    }
    return true;
  }

  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  signinHandler(event) {
    event.preventDefault();

    const {
      email, password,
    } = this.state;
    const data = {
      email, password,
    };
    this.props.signin(data);
  }

  render() {
    return (
      <div className="sd-margin-12 d-margin-6">
        <div className="sign-card">
          <form
            className="signup-form"
            onSubmit={this.signinHandler} >
            <p>
              <small>Don't have an account?</small>
              <a href="/signup" className="inherit"><b> Sign up</b></a>
            </p>

            <p className= {`signup-error ${this.state.style}`}>
              {this.state.message}
            </p>
            <div className="form-item">
              <label htmlFor="email">Email</label>
              <input
                data-testid="signin-email"
                type="text"
                name="email"
                placeholder="Email"
                required
                onInput={this.changeHandler} />
            </div>

            <div className="form-item">
              <label htmlFor="password">Password</label>
              <input
                data-testid="signin-password"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                onInput={this.changeHandler}
                required />
            </div>

            <button
              data-testid="signinBtn"
              className="btn primary"
              id="sign-in">Sign in</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  payload: state.user.payload,
});

SigninForm.propTypes = {
  payload: Proptypes.object,
  signin: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, { signin })(SigninForm);
