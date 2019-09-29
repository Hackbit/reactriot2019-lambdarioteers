export const ADDING_USER = 'ADDING_USER';
export const DELETING_USER = 'DELETING_USER';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addUser = user => ({ type: ADDING_USER, payload: user });

export const deleteUser = id => ({ type: DELETING_USER, payload: id });

export const toggleTask = (user_id, task_id) => ({
  type: TOGGLE_TASK,
  payload: { user: user_id, task: task_id }
});
