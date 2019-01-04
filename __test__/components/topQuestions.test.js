import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import TopQuestions from '../../src/components/aside/TopQuestions';
import store from '../utilities/store';
import data from '../utilities/data';

const store1 = store({
  questions: {
    questions: [],
  }
});
const store2 = store(data.homeQuestions);

describe('AcceptAnswer component', () => {
  test('Test that the TopQuestions displays', () => {
    const component = renderer.create(
      <MemoryRouter>
        <TopQuestions store={store1}/>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });

  test('Test that the TopQuestions displays', () => {
    const component = renderer.create(
      <MemoryRouter>
        <TopQuestions store={store2}/>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
