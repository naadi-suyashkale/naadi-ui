import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Message = ({ heading, icon, children }) => {
  return (
    <div>
      {heading && (
        <h2 className='text-center border-bottom pb-3 m-3'>
          {icon && <FontAwesomeIcon icon={icon} className='mr-3' />}
          {heading}
        </h2>
      )}
      <div className='text-center'>{children}</div>
    </div>
  );
};

Message.propTypes = {
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  icon: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Message;
