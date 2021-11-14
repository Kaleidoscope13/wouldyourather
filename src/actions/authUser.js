export const SET_AUTH_USER = 'SET_AUTH_USER';
export const RESET_AUTH_USER = 'RESET_AUTH_USER';

export function setAuthedUser(id) {
	return {
		type: SET_AUTH_USER,
		id
	};
}

export function reSetAuthedUser(id) {
	return {
		type: RESET_AUTH_USER
	};
}
