import answerReducer from '../../src/reducers/answerReducer';
import * as types from '../../src/actions/types';
import data from '../utilities/data';

const initialState = {
  answer: {},
  answers: [],
  accepted: null,
  voted: null,
  comment: {},
};

describe('Answer reducer POST ANSWER test', () => {
  test('should return the initial state', () => {
    expect(answerReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle NEW_ANSWER', () => {
    expect(
      answerReducer([], {
        type: types.NEW_ANSWER,
        data: data.sampleAnswer.data
      })
    ).toEqual({
      answer: data.sampleAnswer.data,
    });

    expect(
      answerReducer([
        {
          answer: data.sampleAnswer.data,
        }
      ],
      {
        type: types.NEW_ANSWER,
        data: data.sampleAnswer.data
      })
    ).toEqual({
      0: {
        answer: data.sampleAnswer.data,
      },
      answer: data.sampleAnswer.data,
    });
  });
});

describe('Answer reducer FETCH QUESTION/ANSWER test', () => {
  test('should return the initial state', () => {
    expect(answerReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle FETCH_QUESTION', () => {
    expect(
      answerReducer([], {
        type: types.FETCH_QUESTION,
        data: data.question.data
      })
    ).toEqual({
      answers: data.question.data.answers,
    });

    expect(
      answerReducer([
        {
          answers: data.question.data.answers,
        }
      ],
      {
        type: types.FETCH_QUESTION,
        data: data.question.data
      })
    ).toEqual({
      0: {
        answers: data.question.data.answers,
      },
      answers: data.question.data.answers,
    });
  });
});

describe('Answer reducer ACCEPT ANSWER test', () => {
  test('should return the initial state', () => {
    expect(answerReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle ACCEPT_ANSWER', () => {
    expect(
      answerReducer([], {
        type: types.ACCEPT_ANSWER,
        data: data.question.data.answers
      })
    ).toEqual({
      accepted: data.question.data.answers,
    });

    expect(
      answerReducer([
        {
          accepted: data.question.data.answers,
        }
      ],
      {
        type: types.ACCEPT_ANSWER,
        data: data.question.data.answers
      })
    ).toEqual({
      0: {
        accepted: data.question.data.answers,
      },
      accepted: data.question.data.answers,
    });
  });
});

describe('Answer reducer VOTE ANSWER test', () => {
  test('should return the initial state', () => {
    expect(answerReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle VOTE_ANSWER', () => {
    expect(
      answerReducer([], {
        type: types.VOTE_ANSWER,
        data: data.question.data.answers
      })
    ).toEqual({
      voted: data.question.data.answers,
    });

    expect(
      answerReducer([
        {
          voted: data.question.data.answers,
        }
      ],
      {
        type: types.VOTE_ANSWER,
        data: data.question.data.answers
      })
    ).toEqual({
      0: {
        voted: data.question.data.answers,
      },
      voted: data.question.data.answers,
    });
  });
});
