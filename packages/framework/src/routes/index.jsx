import React, { Fragment, useEffect } from 'react';
import { Switch, useHistory, useLocation } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {
  faExclamationCircle,
  faUnlink,
} from '@fortawesome/free-solid-svg-icons';

import Home from './home';
import Message from '../components/message';
import { FormattedMessage } from 'react-intl';

const Routes = () => {
  return (
    <Fragment>
      <div className='container-fluid'>
        <Switch>
          <Route path='/401' exact component={RouteUnauthorized} />
          <Route path='/redirect' exact component={RouteRedirect} />
          <Route path='/' exact component={Home} />
          <Route path='*' component={RouteNotFound} />
        </Switch>
      </div>
    </Fragment>
  );
};

const RouteUnauthorized = () => (
  <Message
    heading={<FormattedMessage id='UNAUTHORIZED' />}
    icon={faExclamationCircle}>
    <FormattedMessage id='YOU-ARE-NOT-AUTHORIZED' />
  </Message>
);

const RouteRedirect = () => {
  const location = useLocation();

  const history = useHistory();

  useEffect(() => {
    if (location?.state?.pathname) {
      history.push(location.state.pathname);
    }
  }, [location, history]);

  return (
    <Message heading={<FormattedMessage id='404' />} icon={faUnlink}>
      <FormattedMessage id='PAGE-NOT-FOUND' />
    </Message>
  );
};

const RouteNotFound = () => {
  const location = useLocation();

  const history = useHistory();

  useEffect(() => {
    if (location.pathname.includes('&state')) {
      history.push({
        pathname: '/redirect',
        state: { pathname: location.pathname.split('&state')[0] },
      });
    }
  }, [location, history]);

  return (
    <Message heading={<FormattedMessage id='404' />} icon={faUnlink}>
      <FormattedMessage id='PAGE-NOT-FOUND' />
    </Message>
  );
};

export default Routes;
