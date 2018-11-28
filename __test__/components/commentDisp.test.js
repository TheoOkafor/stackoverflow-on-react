import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import CommentDisp from '../../src/components/question/answer/CommentDisp';
import data from '../utilities/data';

test('Test that the CommentDisp displays', () => {
  const component = renderer.create(
    <MemoryRouter>
      <CommentDisp comment={data.comment} index={12}/>
    </MemoryRouter>
  );
  expect(component).toMatchSnapshot();
});
