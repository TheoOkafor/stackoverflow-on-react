import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import UserProfile from '../../src/components/user/UserProfile';
import store from '../../src/store';

const match = {
  url: '/users/45'
};

test('Test that the CommentDisp displays', () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <UserProfile match={match} />
      </MemoryRouter>
    </Provider>
  );
  expect(component).toMatchSnapshot();
});
