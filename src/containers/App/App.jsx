import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardContainer from '../Board/Board';

import NotFound from '../NotFound';
import Header from '../Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DndProvider backend={HTML5Backend}>
          <Switch>
            <Route exact path="/" component={BoardContainer} />
            <Route component={NotFound} />
          </Switch>
        </DndProvider>
      </div>
    );
  }
}

export default App;
