import { AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT } from '../constant';
import {Cookie} from '../lib/Cookie';
const initialState = {
  	token: Cookie.get('token'),
  	user: Cookie.get('user')
};

export const authReducer = (state = initialState, { type, payload, user }) => {
    switch (type) {
    	case AUTH_SUCCESS: {
      		return { ...state, token: payload, user };
    	}
    	case AUTH_FAILURE: {
      		return { ...state, error: payload }
    	}
    	case AUTH_LOGOUT: {
      		return { ...state, token: null, user: null }
    	}
    	default:
      		return state;
  	}
};