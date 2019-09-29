import { DELETING_USER, ADDING_USER, SAVE_TASK } from "../actions";

const initial_state = {
  users: [],
  addingUser: false,
  deletingUser: false,
  addingUserError: false
};

const userReducer = (state = initial_state, action) => {
  let newUsers;

  console.log("adding user");

  switch (action.type) {
    case ADDING_USER:
      return { ...state, users: [...state.users, action.payload] };
    case DELETING_USER:
      newUsers = state.users.filter(user => user.id !== action.payload);
      return { ...state, users: [...newUsers] };
    case SAVE_TASK:
        let user = state.users.filter(user => user.id === action.payload.user);
        user[0].tasks.push(action.payload.task[0])
        return { ...state, users: [...state.users, user]};
    default:
      return state;
  }
};

export default userReducer;
