import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../src/components/main/Home';
import store from '../utilities/store';
import data from '../utilities/data';

const store1 = store({
  questions: {
    questions: [],
  }
});
const store2 = store(data.homeQuestions);

describe('AcceptAnswer component', () => {
  test('Test that the Home displays', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Home store={store1}/>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });

  test('Test that the Home displays', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Home store={store2}/>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });

  test('Test that the Home displays', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Home store={store2}/>
      </MemoryRouter>
    );
    component.update(
      <MemoryRouter>
        <Home store={store2}/>
      </MemoryRouter>
    );
    expect(component).toBe(component);
  });
});
