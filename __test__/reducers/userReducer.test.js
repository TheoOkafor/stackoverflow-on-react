import userReducer from '../../src/reducers/userReducer';
import * as types from '../../src/actions/types';
import data from '../utilities/data';

const initialState = {
  user: {},
};

describe('Answer reducer USER REDUCER test', () => {
  test('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle USER REDUCER', () => {
    expect(
      userReducer([], {
        type: types.USER,
        data: data.userData
      })
    ).toEqual({
      user: data.userData,
    });
  });
});
