import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import postAnswer from '../../src/actions/answerActions';
import * as types from '../../src/actions/types';
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
      .post(`https://stackoverflow-by-theo1.herokuapp.com/v1/questions/${
        id}/answers`, {
        data: data.sampleAnswer,
      });

    const expectedActions = [{
      type: types.NEW_ANSWER,
      data: data.sampleAnswer,
    }];
    return store.dispatch(postAnswer(data.sampleAnswer, id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
