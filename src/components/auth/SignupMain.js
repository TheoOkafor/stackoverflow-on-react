import React, { Component } from 'react';
import SignupForm from './SignupForm';

class SignupMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="main row-container">
        <div className="sd-margin-12 d-margin-6 margin-top-20 site-desc">
          <h1 className="heading center">
            Join Stack Overflow<small>-lite</small>
          </h1>
          <p>
            This is a platform where you can ask
            <span>questions</span> and provide <span>answers</span>.
          </p>
        </div>

        <SignupForm />
        <div className="clear-fix" />

      </div>
    );
  }
}

export default SignupMain;
