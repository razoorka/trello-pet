import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import NotFound from '../../components/NotFound';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
// import Dashboard from '@components/Dashboard';

import { asyncComponent } from '../../utils';

import PrivateRoute from './PrivateRoute';
import HeaderContainer from '../Header';

const Dashboard = asyncComponent(() => import('../../components/Dashboard'));

class App extends Component {
  componentDidMount() {
    const { getUserData } = this.props;
    getUserData();
  }

  render() {
    const { authentificated, } = this.props;
    return (
      <div className="App">
        {authentificated && <HeaderContainer />}
        <Content>
          <Switch>
            <PrivateRoute path="/" exact component={Dashboard} authentificated />
            <Route component={NotFound} />
          </Switch>
        </Content>

        {authentificated && <Footer />}
      </div>
    );
  }
}

App.propTypes = {
  getUserData: PropTypes.func,
  isLoaded: PropTypes.bool,
  authentificated: PropTypes.bool,
};

App.defaultProps = {
  getUserData: () => {},
  isLoaded: false,
  authentificated: false,
};

export default App
