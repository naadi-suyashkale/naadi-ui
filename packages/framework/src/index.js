import React from 'react';
import ReactDOM from 'react-dom';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { Provider } from 'react-redux';

import keycloak from './configs/keycloak';
import store from './store';
import App from './app';
import './scss/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <ReactKeycloakProvider authClient={keycloak}>
      <Provider store={store}>
        <App />
      </Provider>
    </ReactKeycloakProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
