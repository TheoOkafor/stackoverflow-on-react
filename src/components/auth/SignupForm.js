import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import { signup } from '../../actions/authActions';
import check from '../utilities/check';


class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      confirmpassword: '',
      passwordCheck: {
        style: '',
        message: '',
      },
      passwordMatch: {
        message: '',
      },
      message: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.signupHandler = this.signupHandler.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.passwordMatch = this.passwordMatch.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const checkUser = this.props.payload === nextProps.payload;
    if (!checkUser) {
      if (nextProps.payload.statusCode === 201) {
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

  checkPassword(event) {
    this.setState({
      password: event.target.value,
      passwordCheck: {
        style: 'visible',
        message: check(event.target.value),
      },
    });
  }

  passwordMatch(event) {
    let message;
    const confirmpassword = event.target.value;
    const { password } = this.state;
    if (password === confirmpassword) {
      message = '';
    } else {
      message = 'Passwords do not match!';
    }

    this.setState({
      confirmpassword: event.target.value,
      passwordMatch: {
        message,
      },
    });
  }

  signupHandler(event) {
    event.preventDefault();

    const {
      username, email, password, confirmpassword,
    } = this.state;
    const data = {
      username, email, password, confirmpassword,
    };
    this.props.signup(data);
  }

  render() {
    return (
      <div className="sd-margin-12 d-margin-6">
        <div className="sign-card">
          <form className= "signup-form"
            onSubmit={this.signupHandler}>
            <p>
              <small>Already Signed up?</small>
              <a href="/signin" className="inherit">Sign in</a></p>

            <p className= {`signup-error ${this.state.passwordCheck.style}`}>
              {this.state.message}
            </p>
            <div className="form-item">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                required
                onChange= {this.changeHandler}
              />
            </div>
            <div className="form-item">
              <label>Email</label>
              <input
                data-testid="email"
                type="email"
                name="email"
                placeholder="Your current email address"
                required
                onChange= {this.changeHandler} />
            </div>
            <div className="form-item">
              <label>Create Password</label>
              <input
                data-testid="password"
                type="password"
                name="password"
                placeholder="Create Password"
                id="password"
                onInput= {this.checkPassword}
                required />
              <h5 id="pass-strength" className={this.state.passwordCheck.style}>
                {this.state.passwordCheck.message}
              </h5>
            </div>
            <div className="form-item">
              <label>Repeat Password</label>
              <input
                data-testid="password2"
                type="password"
                name="confirmpassword"
                placeholder="Repeat password"
                id="password2"
                onChange= {this.passwordMatch}
                required />
              <h5 id="match-display">{this.state.passwordMatch.message}</h5>
            </div>
            <button
              data-testid="signupBtn"
              className="btn primary"
              id="sign-up">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  payload: state.user.payload,
});

SignupForm.propTypes = {
  payload: Proptypes.object,
  signup: Proptypes.func,
};

export default connect(mapStateToProps, { signup })(SignupForm);
