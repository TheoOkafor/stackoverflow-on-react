import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Answer from '../../src/components/question/Answer';
import store from '../../src/store';
import data from '../utilities/data';

test('Test that the AnswerOptions displays', () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Answer
          answer={data.answer}
          question={data.question} />
      </MemoryRouter>
    </Provider>
  );
  expect(component).toMatchSnapshot();
});
