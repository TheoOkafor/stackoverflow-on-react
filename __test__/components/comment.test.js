import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Comment from '../../src/components/question/answer/Comment';
import store from '../../src/store';
import data from '../utilities/data';

test('Test that the Comment displays', () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Comment answer={data.answer}/>
      </MemoryRouter>
    </Provider>
  );
  expect(component).toMatchSnapshot();
});
