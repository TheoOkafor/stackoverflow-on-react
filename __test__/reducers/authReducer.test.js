import authReducer from '../../src/reducers/authReducer';
import * as types from '../../src/actions/types';
import data from '../utilities/data';

const initialState = {
  payload: {},
};

describe('Sign up reducer test', () => {
  test('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle SIGN UP', () => {
    expect(
      authReducer([], {
        type: types.SIGN_UP,
        data: data.payload,
      })
    ).toEqual({
      payload: data.payload,
    });

    expect(
      authReducer([
        {
          payload: data.payload,
        }
      ],
      {
        type: types.SIGN_UP,
        data: data.payload
      })
    ).toEqual({
      0: {
        payload: data.payload,
      },
      payload: data.payload,
    });
  });

  test('should handle SIGN IN', () => {
    expect(
      authReducer([], {
        type: types.SIGN_IN,
        data: data.payload,
      })
    ).toEqual({
      payload: data.payload,
    });

    expect(
      authReducer([
        {
          payload: data.payload,
        }
      ],
      {
        type: types.SIGN_IN,
        data: data.payload
      })
    ).toEqual({
      0: {
        payload: data.payload,
      },
      payload: data.payload,
    });
  });
});
