import answerReducer from '../../src/reducers/answerReducer'
import * as types from '../../src/actions/types';
import data from '../utilities/data';

const initialState = {
  answer: {},
  answers: [],
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
        }
      )
    ).toEqual({
      0: {
        answer: data.sampleAnswer.data,
      },
      answer: data.sampleAnswer.data,
    })
  })
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
        }
      )
    ).toEqual({
      0: {
        answers: data.question.data.answers,
      },
      answers: data.question.data.answers,
    })
  })
})
