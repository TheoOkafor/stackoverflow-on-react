import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/answerActions';
import * as types from '../../src/actions/types';
import fetchMock from 'fetch-mock';
import data from '../utilities/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({
  answers: [],
});

const id = '90';

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
    fetchMock
      .post(`https://stackoverflow-by-theo1.herokuapp.com/v1/questions/${id}/answers`, {
        data:  data.sampleAnswer,
        headers: { 'content-type': 'application/json' },
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTQyNjUxODg0LCJleHAiOjE1NDMyNTY2ODR9.hAWGp6zgMCO1trTNGWVWEuDuDxQYdwmJOTo8W4eMEF4',
    });

    const expectedActions = [{ 
      type: types.NEW_ANSWER,
      data: data.sampleAnswer,
    }];
    return store.dispatch(actions.postAnswer(data.sampleAnswer, id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  })
});
