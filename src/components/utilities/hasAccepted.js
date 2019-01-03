const hasAccepted = (answers) => {
  const acceptedAns = answers.filter(answer => answer.accepted);
  if (acceptedAns.length > 0) {
    return true;
  }
  return false;
};

export default hasAccepted;
