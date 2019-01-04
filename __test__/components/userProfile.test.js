import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import UserProfile from '../../src/components/user/UserProfile';
import store from '../utilities/store';
import data from '../utilities/data';

const match = {
  url: '/users/3'
};

const userStore1 = store({
  userProfile: {
    user: {},
  },
  questions: {
    questions: [],
  }
});

const userStore2 = store({
  userProfile: {
    user: null,
  },
  questions: {
    questions: [],
  }
});

const userStore3 = store(data.userProfile);
describe('Userprofile component', () => {
  test('Test that the Userprofile displays', () => {
    const component = renderer.create(
      <Provider store={userStore1}>
        <MemoryRouter>
          <UserProfile match={match} />
        </MemoryRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test('Test that the Userprofile does not display', () => {
    const component = renderer.create(
      <Provider store={userStore2}>
        <MemoryRouter>
          <UserProfile match={match} />
        </MemoryRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test('Test that the UserProfile displays fetched details', () => {
    const component = renderer.create(
      <Provider store={userStore3}>
        <MemoryRouter>
          <UserProfile match={match} />
        </MemoryRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
