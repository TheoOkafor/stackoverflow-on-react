import React from 'react';
import renderer from 'react-test-renderer';
import AnswerOptions from '../../src/components/question/answer/AnswerOptions';
import data from '../utilities/data';

test('Test that the AnswerOptions displays', () => {
  const component = renderer.create(
    <AnswerOptions answer={data.answer} index={12}/>
  );
  expect(component).toMatchSnapshot();
});
