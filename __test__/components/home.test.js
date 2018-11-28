import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../src/components/main/Home';
import store from '../../src/store';
// import data from '../utilities/data';

test.skip('Test that the Home displays', () => {
  const component = renderer.create(
    <Home store={store}/>
  );
  expect(component).toMatchSnapshot();
});
