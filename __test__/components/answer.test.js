import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Answer from '../../src/components/question/Answer';
import data from '../utilities/data';

test('Test that the AnswerOptions displays', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Answer
        answer={data.answer}
        question={data.question} />
    </MemoryRouter>
  );
  expect(component).toMatchSnapshot();
});
