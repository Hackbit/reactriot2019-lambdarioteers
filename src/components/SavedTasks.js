import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Task from './Task';

const SavedTasks = ({ users, tasks, history }) => {
  let currentUser = users.filter(
    user => user.id === +localStorage.getItem('id')
  )[0];

  return (
    <TaskViewContainer>
      {!currentUser.tasks.length ? (
        <h1>No saved tasks</h1>
      ) : (
        <h1>Saved Tasks</h1>
      )}
      {tasks.map(
        task =>
          currentUser.tasks.includes(task.id) && (
            <Task history={history} task={task} />
          )
      )}
    </TaskViewContainer>
  );
};
const mapStateToProps = state => {
  return {
    tasks: state.taskReducer.tasks,
    users: state.userReducer.users
  };
};
export default connect(
  mapStateToProps,
  null
)(SavedTasks);

const TaskViewContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: #e4d6a7;
  padding-bottom: 50px;
`;
