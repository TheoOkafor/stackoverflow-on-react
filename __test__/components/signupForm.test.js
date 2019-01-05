import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import SignupForm from '../../src/components/auth/SignupForm';
import store from '../../src/store';

describe('Signup Component', () => {
  test('Test that the Signup Form displays', () => {
    const component = renderer.create(
      <SignupForm store={store}/>
    );
    expect(component).toMatchSnapshot();
  });
  test('should handle click for signup', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <SignupForm store={store} />
      </MemoryRouter>
    );
    const signupBtn = getByTestId('signupBtn');
    signupBtn.onclick = handleClick;
    fireEvent.click(signupBtn);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test('should handle confirm password change', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <SignupForm store={store} />
      </MemoryRouter>
    );
    const password2 = getByTestId('password2');
    const password = getByTestId('password');
    const email = getByTestId('email');

    fireEvent.change(email, { target: { value: 'teho@yahoo.com' }, });
    fireEvent.input(password, { target: { value: 'password' }, });
    fireEvent.change(password2, { target: { value: 'password' }, });
  });
  test('should handle confirm password change', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <SignupForm store={store} />
      </MemoryRouter>
    );
    const password2 = getByTestId('password2');
    const password = getByTestId('password');
    const email = getByTestId('email');

    fireEvent.change(email, { target: { value: 'teho@yahoo.com' }, });
    fireEvent.input(password, { target: { value: 'password1' }, });
    fireEvent.change(password2, { target: { value: 'password' }, });
  });
});
