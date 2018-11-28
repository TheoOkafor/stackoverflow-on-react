import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../src/components/Footer';

test('Test that the Footer displays', () => {
  const component = renderer.create(
    <Footer />
  );
  expect(component).toMatchSnapshot();
});
