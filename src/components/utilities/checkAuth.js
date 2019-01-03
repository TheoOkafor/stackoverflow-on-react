export default () => {
  const token = localStorage.getItem('x-access-token');
  return token;
};
