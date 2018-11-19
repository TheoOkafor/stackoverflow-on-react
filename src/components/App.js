import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Header from './header/Header';
// import Footer from './Footer';
// import HomePage from './HomePage';
// import QuestionMain from './question/QuestionMain';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {

  }
  render() {
    return (
      <Router>
        <div>
          <h1>What's the difference</h1>
          {/* <Header />
          <Route exact= { true } path="/" component={ HomePage } />
          <Route exact path="/questions/:id" component={ QuestionMain } />
          <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
