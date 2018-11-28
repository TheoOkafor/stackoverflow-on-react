const checkPassword = (input) => {
  let result;
  const arr1 = [/[A-Z]+?/, /[a-z]+?/, /[0-9]+?/, /[$@#&!]+?/];

  const doMatch = (arr, word) => {
    const output = [];

    for (let i = 0; i <= arr.length; i += 1) {
      if (word.match(arr[i]) !== null) {
        output.push(word.match(arr[i]));
      }
    }
    return output;
  };

  if (input.length < 6) {
    result = 'Minimum password length is 6';
  } else if (input.length > 12) {
    result = 'Maximum password length is 12';
  } else {
    const matchLength = doMatch(arr1, input).length;
    switch (matchLength) {
    case 4:
      result = 'Password Strength: 100%';
      break;
    case 3:
      result = 'Password Strength: 75%';
      break;
    case 2:
      result = 'Password Strength: 50%';
      break;
    case 1:
      result = 'Password Strength: 25%';
      break;
    default:
      result = 'Invalid';
    }
  }
  return result;
};

export default checkPassword;
