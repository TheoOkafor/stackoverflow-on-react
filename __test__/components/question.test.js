import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Question from '../../src/components/question/Question';
import data from '../utilities/data';

test('Test that the Question displays', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Question question={ data.question.data } />
    </MemoryRouter>
  );
  expect(component).toMatchSnapshot();
});
