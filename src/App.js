import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './Router';
import Drawer from 'react-native-drawer';
import { View, Text } from 'react-native';
import ControlPanel from './components/ControlPanel';

class App extends Component {
  closeControlPanel = () => {

  };
  openControlPanel = () => {

  };

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Drawer
          ref={(ref) => this._drawer = ref}
          type="overlay"
          disabled={false}
          captureGestures={true}
          content={<ControlPanel/>}
          tapToClose={true}
          openDrawerOffset={0.5} // 20% gap on the right side of drawer
          panCloseMask={0.2}
          panOpenMask={0.5}
          closedDrawerOffset={-3}
          styles={drawerStyles}
        >
        <Router />
        </Drawer>
      </Provider>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

export default App;
