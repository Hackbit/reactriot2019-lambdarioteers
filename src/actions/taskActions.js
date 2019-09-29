export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const POPULATE_FORM = 'POPULATE_FORM';
export const UPDATE_TASK = 'UPDATE_TASK';
export const CANCEL = 'CANCEL';
export const REMOVE_TASK = 'REMOVE_TASK';

export const addTask = task => {
  return {
    type: ADD_TASK,
    payload: task
  };
};
export const deleteTask = id => {
  return {
    type: DELETE_TASK,
    payload: id
  };
};
export const populateForm = task => {
  return {
    type: POPULATE_FORM,
    payload: task
  };
};
export const updateTask = task => {
  return {
    type: UPDATE_TASK,
    payload: task
  };
};
export const cancel = () => {
  return {
    type: CANCEL
  };
};
export const removeTask = (userId, taskId) => {
  return {
    type: REMOVE_TASK,
    payload: { userId, taskId }
  };
};
