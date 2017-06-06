import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* defaultSaga() {
	yield console.log('default saga');
}

export default defaultSaga;