import React from 'react';
import Button from '../../src/components/main/Button';
import renderer from 'react-test-renderer';

test('Test that the button displays', () => {
  const component = renderer.create(
    <Button styleName="primary" value="My Component" />,
  );
  expect(component).toMatchSnapshot();
});
