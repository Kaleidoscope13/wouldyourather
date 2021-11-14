import { SET_AUTH_USER, RESET_AUTH_USER } from '../actions/authUser';

export default function authedUser(state = null, action) {
	switch (action.type) {
		case SET_AUTH_USER:
			return action.id;
		case RESET_AUTH_USER:
			return null;

		default:
			return state;
	}
}
