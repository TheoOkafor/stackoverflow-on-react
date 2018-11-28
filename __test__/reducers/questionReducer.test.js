import questionReducer from '../../src/reducers/questionReducer';
import * as types from '../../src/actions/types';
import data from '../utilities/data';

const initialState = {
  question: {},
  questions: [],
  questionWithAnswer: {},
};

describe('Answer reducer FETCH QUESTIONS test', () => {
  test('should return the initial state', () => {
    expect(questionReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle FETCH QUESTIONS', () => {
    expect(
      questionReducer([], {
        type: types.FETCH_QUESTIONS,
        data: data.questions
      })
    ).toEqual({
      questions: data.questions,
    });

    expect(
      questionReducer([
        {
          questions: data.questions,
        }
      ],
      {
        type: types.FETCH_QUESTIONS,
        data: data.questions
      })
    ).toEqual({
      0: {
        questions: data.questions,
      },
      questions: data.questions,
    });
  });
});

describe('Answer reducer POST QUESTION test', () => {
  test('should return the initial state', () => {
    expect(questionReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle NEW_QUESTION', () => {
    expect(
      questionReducer([], {
        type: types.NEW_QUESTION,
        data: data.newQuestion
      })
    ).toEqual({
      question: data.newQuestion,
    });

    expect(
      questionReducer([
        {
          question: data.newQuestion,
        }
      ],
      {
        type: types.NEW_QUESTION,
        data: data.newQuestion
      })
    ).toEqual({
      0: {
        question: data.newQuestion,
      },
      question: data.newQuestion,
    });
  });
});

describe('Answer reducer FETCH QUESTION test', () => {
  test('should return the initial state', () => {
    expect(questionReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle FETCH QUESTION', () => {
    expect(
      questionReducer([], {
        type: types.FETCH_QUESTION,
        data: data.question.data
      })
    ).toEqual({
      questionWithAnswer: data.question.data,
    });

    expect(
      questionReducer([
        {
          questionWithAnswer: data.question.data,
        }
      ],
      {
        type: types.FETCH_QUESTION,
        data: data.question.data
      })
    ).toEqual({
      0: {
        questionWithAnswer: data.question.data,
      },
      questionWithAnswer: data.question.data,
    });
  });
});
