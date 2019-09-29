export const ADDING_USER = 'ADDING_USER';
export const DELETING_USER = 'DELETING_USER';
export const SAVE_TASK = 'SAVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const addUser = user => ({ type: ADDING_USER, payload: user });

export const deleteUser = id => ({ type: DELETING_USER, payload: id });

export const saveTask = (user_id, task_id) => ({
  type: SAVE_TASK,
  payload: { user: user_id, task: task_id }
});

export const removeTask = (user_id, task_id) => ({ type: REMOVE_TASK, payload: { user: user_id, task: task_id }});