import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import SigninMain from '../../src/components/auth/SigninMain';
import store from '../../src/store';

test('Test that the Signup Main component displays', () => {
  const component = renderer.create(
    <Provider store={store}>
      <SigninMain />
    </Provider>
  );
  expect(component).toMatchSnapshot();
});
