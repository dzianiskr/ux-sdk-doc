import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import reducer from './src/reducers';
import defaultSaga from './src/sagas'

import App from './App.jsx'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create Store
const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware)
);

// run the saga
sagaMiddleware.run(defaultSaga);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
