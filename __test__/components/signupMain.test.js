import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import SignupMain from '../../src/components/auth/SignupMain';
import store from '../../src/store';

test('Test that the Signup Main component displays', () => {
  const component = renderer.create(
    <Provider store={store}>
      <SignupMain />
    </Provider>
  );
  expect(component).toMatchSnapshot();
});
