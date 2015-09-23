import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/lib/createBrowserHistory';
import {combineReducers, compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import routes from './routes';
import io from 'socket.io-client';
import reducer from './reducer';
import {setClientId, setState, setConnectionState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import getClientId from './client_id';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const dest = document.getElementById('app');

require('./style.css');

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
  store.dispatch(setState(state))
);
[
  'connect',
  'connect_error',
  'connect_timeout',
  'reconnect',
  'reconnecting',
  'reconnect_error',
  'reconnect_failed'
].forEach(ev =>
  socket.on(ev, () => store.dispatch(setConnectionState(ev, socket.connected)))
);

const reducers = combineReducers({
  reducer,
  router: routerStateReducer
});

const createStoreWithMiddleware = compose(
  applyMiddleware(remoteActionMiddleware(socket)),
  reduxReactRouter({
    routes,
    createHistory
  }),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);
const store = createStoreWithMiddleware(reducers);
store.dispatch(setClientId(getClientId()));

render(
  <div>
  <Provider store={store}>
    <ReduxRouter />
  </Provider>
  <DebugPanel top right bottom key="debugPanel">
    <DevTools store={store} monitor={LogMonitor} />
  </DebugPanel>
  </div>, dest);

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer');
      store.replaceReducer(nextRootReducer);
    });
}
/*if (module.hot) {
  module.hot.accept('./components/App', () => {
    let NextApp = require('./components/App');
    render(
    	<Router>
			<Route path="/" component={App}>
				<Route path="/results" component={Results} />
				<Route path="/voting" component={Voting} />
			</Route>
		</Router>,
    	document.getElementById('app')
    );
  }); 
}*/
