import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../src/components/main/Home';
import store from '../../src/store';

test('Test that the Home displays', () => {
  const component = renderer.create(
    <Home store={store}/>
  );
  expect(component).toMatchSnapshot();
});
