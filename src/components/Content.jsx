import React from 'react';

import PropTypes from 'prop-types';

const Content = ({ children }) => <div>{children}</div>;

Content.propTypes = {
  children: PropTypes.node,
};

Content.defaultProps = {
  children: <p />,
};

export default Content;
