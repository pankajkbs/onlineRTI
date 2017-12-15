import { SHOW_LOGIN_POPUP } from '../constant';

const initialLoginPopupState = {
	displayLoginPopup: false
};

export const loginPopupReducer = (state = initialLoginPopupState, action) => {
    switch (action.type) {
    	case SHOW_LOGIN_POPUP: {
      		return { ...state, displayLoginPopup: action.displayLoginPopup };
    	}
    	default:
      		return state;
  	}
};