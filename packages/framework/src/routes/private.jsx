import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useKeycloak } from '@react-keycloak/web';
import { faCouch } from '@fortawesome/free-solid-svg-icons';

import { set } from '../store/user/actions';
import Message from '../components/messagee';
import { FormattedMessage } from 'react-intl';

const Private = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();

  const user = useSelector(o => o.user);

  const { keycloak } = useKeycloak();

  const setProfile = useCallback(
    ({ username, firstName, lastName }) => {
      dispatch(set({ username, firstName, lastName, token: keycloak.token }));
    },
    [keycloak, dispatch]
  );

  useEffect(() => {
    if (!user) {
      if (keycloak.authenticated) {
        if (keycloak.profile) {
          setProfile(keycloak.profile);
        } else {
          keycloak.loadUserProfile().then(res => setProfile(res));
        }
      } else {
        keycloak.login();
      }
    }
  }, [keycloak, setProfile, user]);

  return (
    <Route
      {...rest}
      render={properties =>
        user ? (
          <Component {...properties} />
        ) : (
          <Message heading={<FormattedMessage id='RELAX' />} icon={faCouch}>
            <FormattedMessage id='GETTING-THINGS-READY' />
          </Message>
        )
      }
    />
  );
};

Private.propTypes = {
  component: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired,
};

export default Private;
