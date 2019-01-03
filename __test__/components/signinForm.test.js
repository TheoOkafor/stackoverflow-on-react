import React from 'react';
import renderer from 'react-test-renderer';
import SigninForm from '../../src/components/auth/SigninForm';
import store from '../../src/store';

test('Test that the Signup Form displays', () => {
  const component = renderer.create(
    <SigninForm store={store}/>
  );
  expect(component).toMatchSnapshot();
});
