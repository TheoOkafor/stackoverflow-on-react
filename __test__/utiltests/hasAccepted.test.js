import hasAccepted from '../../src/components/utilities/hasAccepted';

const truthyData = [
  {
    accepted: true,
  },
];

const falsyData = [
  {
    accepted: false,
  },
];

describe('hasAccepted function test', () => {
  test('should return true', () => {
    expect(hasAccepted(truthyData)).toEqual(true);
  });

  test('should return false', () => {
    expect(hasAccepted(falsyData)).toEqual(false);
  });
});
