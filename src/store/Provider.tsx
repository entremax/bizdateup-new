'use client';
import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from '.';
import {PersistGate} from "redux-persist/integration/react";

const ReduxProvider = ({children}: { children: React.ReactNode }) => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        {children}
      </Provider>
    </PersistGate>
  );
};

export default ReduxProvider;
