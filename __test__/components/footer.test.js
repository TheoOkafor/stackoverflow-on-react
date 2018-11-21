import React from 'react';
import Footer from '../../src/components/Footer';
import renderer from 'react-test-renderer';

test('Test that the Footer displays', () => {
  const component = renderer.create(
    <Footer />
  );
  expect(component).toMatchSnapshot();
});
