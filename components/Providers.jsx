'use client';

import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import store from '@/store/store';

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <HelmetProvider>
        {children}
      </HelmetProvider>
    </Provider>
  );
}
