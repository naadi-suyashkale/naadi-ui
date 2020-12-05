import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { useKeycloak } from '@react-keycloak/web';

import { actions, Message } from '@naadi/framework';
import Routes from './routes/index';

const App = () => {
  const dispatch = useDispatch();

  const { locale, messages } = useSelector(o => o.lang);

  const { initialized } = useKeycloak();

  useEffect(() => {
    dispatch(actions.lang.change('en'));
  }, [dispatch]);

  return (
    <HashRouter basename='/'>
      {initialized && locale && messages ? (
        <IntlProvider locale={locale} messages={messages}>
          <Routes />
        </IntlProvider>
      ) : (
        <Message icon={faCouch} heading='Relax'>
          Please wait, we are getting things ready for you!
        </Message>
      )}
    </HashRouter>
  );
};

export default App;
