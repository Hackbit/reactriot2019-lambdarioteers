export const ADDING_USER = 'ADDING_USER';
export const DELETING_USER = 'DELETING_USER';

export const addUser = user => ({ type: ADDING_USER, payload: user });

export const deleteUser = id => ({ type: DELETING_USER, payload: id });