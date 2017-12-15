import { call, put } from 'redux-saga/effects';
import {login} from '../api/user';
import {  AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT } from '../constant';
import {Cookie} from '../lib/Cookie';

export function* authorize(action) {
	try {
	   	const { token, user } = yield call(login, 'login-web', action.user);
		yield put({ type: AUTH_SUCCESS, payload: token, user });
		Cookie.set('token', token, 1);
		Cookie.set('user', user, 1);
		action.callbackSuccess();
	} catch (error) {
		const {errors} = error;
		yield put({ type: AUTH_FAILURE, payload: errors.message });
		Cookie.delete('token');
		action.callbackError(errors.message);
	}
}

export function* logout(action) {
	Cookie.delete('token');
	Cookie.delete('user');
	yield put({ type: AUTH_LOGOUT });
	action.callbackSuccess();
}