import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Redirect = () => {
  const location = useLocation();

  const history = useHistory();

  useEffect(() => {
    console.log(window.location);
    if (location?.state?.pathname) {
      history.push(location.state.pathname);
    } else {
      history.push({
        pathname: '/redirect',
        state: {
          pathname: location.pathname.split('&')[0],
        },
      });
    }
  }, [location, history]);

  return <div>done</div>;
};

export default Redirect;
