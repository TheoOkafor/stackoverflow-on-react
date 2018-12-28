import React from 'react';
import renderer from 'react-test-renderer';
import SignupForm from '../../src/components/auth/SignupForm';
import store from '../../src/store';

test('Test that the Signup Form displays', () => {
  const component = renderer.create(
    <SignupForm store={store}/>
  );
  expect(component).toMatchSnapshot();
});
