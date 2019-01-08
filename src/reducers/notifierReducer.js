import notify from '../components/utilities/notify';

const initialState = {
  payload: null,
};
export default (state = initialState, action) => {
  if (action.data && action.data.error) {
    notify.error(action.data.error);
  }
  if (action.data && action.data.message) {
    notify.success(action.data.message);
  }
  switch (action.type) {
  default:
    return state;
  }
};
