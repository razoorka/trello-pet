import React from 'react';

import PropTypes from 'prop-types';

const Header = ({ children, menuList, onLogout }) => (
  <div position="static">
    <div>
      <div variant="h6" color="inherit">
        {children}
      </div>
    </div>
  </div>
);

Header.propTypes = {
  menuList: PropTypes.array,
  children: PropTypes.string,
  onLogout: PropTypes.any,
};

Header.defaultProps = {
  menuList: [],
  children: 'Application',
  onLogout: () => {},
};

export default Header;
