import { DELETING_USER, ADDING_USER, SAVE_TASK } from '../actions';

const initial_state = {
  users: [],
  addingUser: false,
  deletingUser: false,
  addingUserError: false
};

const userReducer = (state = initial_state, action) => {
  let newUsers;

  console.log(action.payload);

  switch (action.type) {
    case ADDING_USER:
      return { ...state, users: [...state.users, action.payload] };
    case DELETING_USER:
      newUsers = state.users.filter(user => user.id !== action.payload);
      return { ...state, users: [...newUsers] };
    case SAVE_TASK:
      let tUser;
      let users = state.users.filter(user => {
        if (user.id === action.payload.user) tUser = user;
        else return user;
      });
      if (tUser.tasks) tUser.tasks.push(action.payload.task);
      else tUser.tasks = [action.payload.task];
      users = [...users, tUser];

      return { ...state, users };
    default:
      return state;
  }
};

export default userReducer;
