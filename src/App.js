import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import loggedIn from './components/utilities/checkAuth';

import Header from './components/header/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import QuestionMain from './components/question/QuestionMain';
import SignupMain from './components/auth/SignupMain';
// import QuestionMain from './question/QuestionMain';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  signupRedirect() {
    return loggedIn() ? (
      <Redirect to="/"/>
    ) : (
      <SignupMain/>
    );
  }

  render() {
    return (
      <Provider store= {store}>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/questions/:id" component={QuestionMain} />
            <Route exact path="/signup"
              render={this.signupRedirect} />
            {/* <Route exact path="/users/:id" component= { UserMain } /> */}
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
