import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Comment from '../../src/components/question/answer/Comment';
import data from '../utilities/data';

test('Test that the Comment displays', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Comment answer={data.answer}/>
    </MemoryRouter> 
  );
  expect(component).toMatchSnapshot();
});
