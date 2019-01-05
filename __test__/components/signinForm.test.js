import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import SigninForm from '../../src/components/auth/SigninForm';
import store from '../../src/store';

describe('Signin Component', () => {
  test('Test that the Signup Form displays', () => {
    const component = renderer.create(
      <SigninForm store={store}/>
    );
    expect(component).toMatchSnapshot();
  });
  test('should handle click for signup', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <SigninForm store={store} />
      </MemoryRouter>
    );
    const signinBtn = getByTestId('signinBtn');
    signinBtn.onclick = handleClick;
    fireEvent.click(signinBtn);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test('should handle confirm password change', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <SigninForm store={store} />
      </MemoryRouter>
    );
    const password = getByTestId('signin-password');
    const email = getByTestId('signin-email');

    fireEvent.change(email, { target: { value: 'teho@yahoo.com' }, });
    fireEvent.input(password, { target: { value: 'password' }, });
  });
});
