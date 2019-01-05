import checkPassword from '../../src/components/utilities/check';

const password100 = 'pasWOR123$&';
const password75 = 'passWORD123';
const password50 = 'passWORD';
const password25 = 'password';

describe('hasAccepted function test', () => {
  test('should return error', () => {
    expect(checkPassword('pass'))
      .toEqual('Minimum password length is 6');
  });

  test('should return error', () => {
    expect(checkPassword('passwordojongo100'))
      .toEqual('Maximum password length is 12');
  });

  test('should return 100%', () => {
    expect(checkPassword(password100)).toEqual('Password Strength: 100%');
  });

  test('should return 75%', () => {
    expect(checkPassword(password75)).toEqual('Password Strength: 75%');
  });

  test('should return 50%', () => {
    expect(checkPassword(password50)).toEqual('Password Strength: 50%');
  });

  test('should return 25%', () => {
    expect(checkPassword(password25)).toEqual('Password Strength: 25%');
  });

  test('should return error', () => {
    expect(checkPassword('%%%%%%%%%'))
      .toEqual('Invalid');
  });
});
