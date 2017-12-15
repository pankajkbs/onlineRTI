import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, compose } from 'redux';

import Saga from './saga';
import reducer from './reducer';

// create middlewares
const middlewares = [];

// add the router middleware
const history = createHistory();
middlewares.push(routerMiddleware(history));

// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
	middleware = compose(middleware, window.devToolsExtension());
}

if (process.env.NODE_ENV !== "production") {
	const { logger } = require(`redux-logger`);

  	middlewares.push(logger);
    if (module.hot) {
    	module.hot.accept('./reducer', () => {
        	store.replaceReducer(reducer)
      	});
    }
}

// create store
const store = createStore(reducer, middleware);

// run saga middleware
sagaMiddleware.run(Saga);

// export
export { store, history };