import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';

const menuList = [
  {
    text: 'home',
    link: '/',
  },
];

const HeaderContainer = ({ username, logout }) => (
  <Header menuList={menuList} onLogout={logout}>
    {`Dashboard, ${username}`}
  </Header>
);


HeaderContainer.propTypes = {
  username: PropTypes.string,
  logout: PropTypes.func,
};

HeaderContainer.defaultProps = {
  username: ' ',
  logout: () => {},
};
export default HeaderContainer;
