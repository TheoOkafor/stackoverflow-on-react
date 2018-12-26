import React, { Component } from 'react';
import SigninForm from './SigninForm';

class SigninMain extends Component {
  render() {
    return (
      <div className="main row-container">
        <div className="sd-margin-12 d-margin-6 margin-top-20 site-desc">
          <h1 className="heading center">
            Welcome back to Stack Overflow<small>-lite</small>
          </h1>
          <p>
            This is a platform where you can ask
            <span>questions</span> and provide <span>answers</span>.
          </p>
        </div>

        <SigninForm />
        <div className="clear-fix" />

      </div>
    );
  }
}

export default SigninMain;
