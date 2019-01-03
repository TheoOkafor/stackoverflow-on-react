import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import { postAnswer, acceptAnswer } from '../../src/actions/answerActions';
import * as types from '../../src/actions/types';
import data from '../utilities/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({
  answers: [],
});

const payload = {
  questionId: 34,
  answerId: 75,
};

describe('Answer actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });
  afterEach(() => {
    fetchMock.restore();
  });
  afterAll(() => {
    store.clearActions();
  });

  test('should dispatch the answer to the store after post', () => {
    fetch
      .mockResponseOnce(JSON.stringify({
        data: data.sampleAnswer,
      }));

    const expectedActions = [{
      type: types.NEW_ANSWER,
      data: data.sampleAnswer,
    }];
    return store.dispatch(postAnswer(data.sampleAnswer, payload.answerId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  test('should dispatch the credentials after accepting answer', () => {
    fetch
      .mockResponseOnce(JSON.stringify({
        payload,
      }));

    const expectedActions = [{
      type: types.ACCEPT_ANSWER,
      data: {
        payload,
      }
    }];
    return store.dispatch(acceptAnswer(payload)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
