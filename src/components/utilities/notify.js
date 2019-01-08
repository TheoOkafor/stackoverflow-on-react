import { toast, Slide } from 'react-toastify';

const notify = {
  success: (message) => {
    toast.success(message, {
      hideProgressBar: true,
      transition: Slide,
      autoClose: 4000,
    });
  },
  error: (message) => {
    toast.error(message, {
      hideProgressBar: false,
      transition: Slide,
      autoClose: 4000,
    });
  },
};

export default notify;
