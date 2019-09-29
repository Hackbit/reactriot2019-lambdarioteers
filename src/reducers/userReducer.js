import { toast } from 'react-toastify'
import { DELETING_USER, ADDING_USER, TOGGLE_TASK } from '../actions';
import { css } from 'glamor';

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
    case TOGGLE_TASK:
      let tUser;
      let users = state.users.filter(user => {
        if (user.id === action.payload.user) tUser = user;
        return user.id !== action.payload.user;
      });
      if (!tUser.tasks) tUser.tasks = [];

      if (tUser.tasks.includes(action.payload.task)) {
        tUser.tasks = tUser.tasks.filter(task => task != action.payload.task);
        toast.success('Task removed', {
          className: css({
            backgroundColor: '#9b2915 !important' 
          }),
          position: toast.POSITION.BOTTOM_CENTER,
          hideProgressBar: true,
          autoClose: 2500
        });
      }
      else {
        tUser.tasks.push(action.payload.task);
        toast.success('Task saved', {
          className: css({
            backgroundColor: '#50a2a7 !important' 
          }),
          position: toast.POSITION.BOTTOM_CENTER,
          hideProgressBar: true,
          autoClose: 2500
        });
      }

      users = [...users, tUser];
      return { ...state, users };
    default:
      return state;
  }
};

export default userReducer;
