import { DELETING_USER, ADDING_USER, SAVE_TASK, REMOVE_TASK } from "../actions";


const initial_state = {
  users: [],
  addingUser: false,
  deletingUser: false,
  addingUserError: false
};

const userReducer = (state = initial_state, action) => {
  let newUsers;
  let user;

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
      case REMOVE_TASK:
          user = state.users.filter(user => user.id === action.payload.user);
          console.log(user)
          return user
          // user[0].tasks.filter(task => task.id !== action.payload.task_id);
          // return {...state, users: [...state.users, user]};
    default:
      return state;
  }
};

export default userReducer;
