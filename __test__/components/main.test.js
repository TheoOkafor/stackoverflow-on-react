import React from 'react';
import Main from '../../src/components/main/Main';
import renderer from 'react-test-renderer';

test('Test that the Home displays', () => {
  const component = renderer.create(
    <Main />
  );
  expect(component).toMatchSnapshot();
});
