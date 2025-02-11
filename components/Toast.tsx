import { toast, ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom toast styles
const customToastStyle: Partial<ToastContainerProps> = {
  style: {
    zIndex: 100000,
    background:"#D5663F"
  },
};

// Function to show a success toast
export const showToastSuccess = (message: string) => {
  toast.success(message, customToastStyle);
};

// Function to show an error toast
export const showToastError = (message: string) => {
  toast.error(message, customToastStyle);
};

