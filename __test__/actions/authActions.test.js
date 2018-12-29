import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/authActions';
import * as types from '../../src/actions/types';
import data from '../utilities/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({
  payload: [],
});
const { payload } = data;

describe('Authentication actions', () => {
  beforeEach(() => {
    store.clearActions();
  });
  afterEach(() => {
    fetchMock.restore();
  });
  afterAll(() => {
    store.clearActions();
  });

  test('should dispatch the credentials to the store after signup', () => {
    fetch
      .mockResponseOnce(JSON.stringify({
        payload,
      }));

    const expectedActions = [{
      type: types.SIGN_UP,
      data: {
        payload,
      }
    }];
    return store.dispatch(actions.signup(data.userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('should dispatch the credentials to the store after signin', () => {
    fetch
      .mockResponseOnce(JSON.stringify({
        payload,
      }));

    const expectedActions = [{
      type: types.SIGN_IN,
      data: {
        payload,
      }
    }];
    return store.dispatch(actions.signin(data.userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
