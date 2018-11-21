import React from 'react';
import renderer from 'react-test-renderer';
import CommentForm from '../../src/components/question/answer/CommentForm';
import data from '../utilities/data';

test('Test that the CommentForm displays', () => {
  const component = renderer.create(
    <CommentForm answer={data.answer} index={12}/>
  );
  expect(component).toMatchSnapshot();
});
