import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

import Header from './components/header/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import QuestionMain from './components/question/QuestionMain'
// import QuestionMain from './question/QuestionMain';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <Provider store= { store }>
        <Router>
          <div>
            <Header />
            <Route exact= { true } path="/" component={ HomePage } />
            <Route exact path="/questions/:id" component={ QuestionMain } />
            {/* <Route exact path="/users/:id" component= { UserMain } /> */}
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
