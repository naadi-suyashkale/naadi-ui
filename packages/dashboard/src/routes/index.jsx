import React, { Fragment, useEffect } from 'react';
import { Switch, useHistory, useLocation } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {
  faExclamationCircle,
  faUnlink,
} from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';

import { Message } from '@naadi/framework';
import Private from './private';
import Home from './home';

const Routes = () => {
  return (
    <Fragment>
      <div className='container-fluid'>
        <Switch>
          <Private path='/private' exact component={Home} />
          <Route path='/401' exact component={Unauthorized} />
          <Route path='/redirect' exact component={Redirect} />
          <Route path='/' exact component={Home} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    </Fragment>
  );
};

const Unauthorized = () => (
  <Message
    heading={<FormattedMessage id='UNAUTHORIZED' />}
    icon={faExclamationCircle}>
    <FormattedMessage id='YOU-ARE-NOT-AUTHORIZED' />
  </Message>
);

const Redirect = () => {
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

const NotFound = () => {
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
