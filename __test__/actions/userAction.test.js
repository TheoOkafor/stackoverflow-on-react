import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import getUser from '../../src/actions/userActions';
import * as types from '../../src/actions/types';
import data from '../utilities/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({
  answers: [],
});

const url = '/users/4';

describe('Answer actions', () => {
  beforeEach(() => {
    store.clearActions();
  });
  afterEach(() => {
    fetchMock.restore();
  });
  afterAll(() => {
    store.clearActions();
  });

  test('should dispatch the answer to the store after post', () => {
    fetchMock
      .getOnce(`https://stackoverflow-by-theo1.herokuapp.com/v1${url}`, {
        data: data.userData,
      });

    const expectedActions = [{
      type: types.USER,
      data: data.userData,
    }];
    return store.dispatch(getUser(url))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
