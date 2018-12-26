import React, { Component } from 'react';
import Main from './main/Main';
import Home from './main/Home';
import AsideRight from './aside/AsideRight';
import QuestionForm from './main/QuestionForm';

class HomePage extends Component {
  render() {
    return (
      <div className="row-container home">
        <Main>
          <div>
            <QuestionForm />
            <Home />
          </div>
        </Main>
        <AsideRight />
      </div>
    );
  }
}

export default HomePage;
