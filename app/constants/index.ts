import { ToasterProps } from 'react-hot-toast';

export const toasterConfig: ToasterProps = {
  position: 'bottom-left',
  toastOptions: {
    className: 'flex text-sm font-medium',
    duration: 5000,
    removeDelay: 1000,
    style: {
      background: 'white',
      color: 'black',
    },

    success: {
      duration: 3000,
      className: 'border-r-4 flex-row-reverse flex border-green-600',
      iconTheme: {
        primary: 'green',
        secondary: 'white',
      },
    },

    error: {
      duration: 4000,
      className: 'border-r-4 flex-row-reverse flex border-red-500',
      iconTheme: {
        primary: '#B91C1C',
        secondary: 'white',
      },
    },
  },
};
