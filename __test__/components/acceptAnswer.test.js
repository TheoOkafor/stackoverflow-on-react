import React from 'react';
import renderer from 'react-test-renderer';
import AcceptAnswer from '../../src/components/question/answer/AcceptAnswer';
import data from '../utilities/data';

test('Test that the AcceptAnswer displays', () => {
  const component = renderer.create(
    <AcceptAnswer answer={data.answer} index={12}/>
  );
  expect(component).toMatchSnapshot();
});
