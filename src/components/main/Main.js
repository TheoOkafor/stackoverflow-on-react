import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Main extends Component {
  render() {
    return (
      <div className="sd-margin-12 d-margin-7 margin-top-15">
        <div className="row-container" id="main-container">
          { this.props.children }

        </div>
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element,
}

export default Main;
