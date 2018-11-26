import React from 'react';
import Logo from '../../src/components/header/Logo';
import renderer from 'react-test-renderer';

test('Test that the Logo displays', () => {
  const component = renderer.create(
    <Logo />
  );
  expect(component).toMatchSnapshot();
});
