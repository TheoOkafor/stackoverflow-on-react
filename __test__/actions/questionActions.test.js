import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../../src/actions/questionActions';
import * as types from '../../src/actions/types';
import data from '../utilities/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({
  questions: [],
});

const route = '/questions/90';

describe('Question actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });
  afterEach(() => {
    fetchMock.restore();
  });

  test('should dispatch the questions to the store after fetching them', () => {
    fetch
      .mockResponseOnce(JSON.stringify({
        data: data.questions,
      }));

    const expectedActions = [{
      type: types.FETCH_QUESTIONS,
      data: data.questions.slice(0).reverse(),
    }];
    return store.dispatch(actions.fetchQuestions()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('should dispatch the question to the store after post', () => {
    fetchMock
      .post('https://stackoverflow-by-theo1.herokuapp.com/v1/questions', {
        data: data.question,
        headers: { 'content-type': 'application/json' },
        'x-access-token': 'hAWGp6zgMCO1trTNGWVWEuDuDxQYdwmJOTo8W4eMEF4',
      });

    const expectedActions = [{
      type: types.NEW_QUESTION,
      data: data.question,
    }];

    return store.dispatch(actions.postQuestion()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('should dispatch the question to the store after post', () => {
    fetch
      .mockResponseOnce(JSON.stringify({
        data: data.question,
      }));

    const expectedActions = [{
      type: types.FETCH_QUESTION,
      data: data.question,
    }];

    return store.dispatch(actions.fetchQuestion(route)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
