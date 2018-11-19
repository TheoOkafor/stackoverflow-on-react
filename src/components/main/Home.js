import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestions } from '../../actions/questionActions';

class Home extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
    <div>
      { this.props.questions }
    </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions.questions,
})

Home.propTypes = {
  fetchQuestions: PropTypes.func.isRequired,
  questions: PropTypes.array,
};

export default connect(mapStateToProps, { fetchQuestions })(Home);
