import React from 'react';
import Card from '../../src/components/main/Card';
import renderer from 'react-test-renderer';

test('Test that the Card displays', () => {
  const component = renderer.create(
    <Card styleName="primary">
      <p>Theo is just testing stuffs out</p>
    </Card>,
  );
  expect(component).toMatchSnapshot();
});
