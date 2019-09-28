import { DELETING_USER, ADDING_USER } from '../actions';

const initial_state = {
	users: [],
	addingUser: false,
	deletingUser: false,
	addingUserError: false
};

const userReducer = (state = initial_state, action) => {
	let newUsers;

	console.log("adding user")

	switch(action.type) {
		case ADDING_USER:
			return { ...state, users: [...state.users, action.payload ]};
			break;
		case DELETING_USER:
			newUsers = state.users.filter(user => (user.id != action.payload));
			return { ...state, users: [...newUsers]}
			break;
		default:
			return state;
	}
};

export default userReducer;