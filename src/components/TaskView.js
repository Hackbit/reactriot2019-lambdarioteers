import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import Task from './Task';

const TaskView = ({ this_user, tasks, history, users }) => {
  let user = users.filter(user => user.id === +localStorage.getItem('id'))[0];
console.log(user)
  if (tasks.length === 0) {
    return (
      <TaskViewContainer>
        <h1>No Current Tasks</h1>
      </TaskViewContainer>
    );
  }
  return (
    <TaskViewContainer>
      <h1>{this_user ? "Your Organization's Tasks" : 'Available Tasks'}</h1>
      {!user && <RegisterSlogan><p>Want to save your favorite tasks?<br/>Register for a <em>Good Deeds</em> account <Link to="/register">here</Link>!</p></RegisterSlogan>}
      <TasksContainer>
        {tasks.map(task => {
          if (!this_user || (this_user && task.user_id === this_user))
            return <Task key={task.id} task={task} history={history} />;
        })}
      </TasksContainer>
    </TaskViewContainer>
  );
};
const mapStateToProps = state => {
  return {
    tasks: state.taskReducer.tasks,
    users: state.userReducer.users
  };
};

export default connect(mapStateToProps)(TaskView);

const TaskViewContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: #50a2a7;
  padding-bottom: 50px;
  padding-top: 40px;
`;

const TasksContainer = styled.div`
  width: 100%;
`;

const RegisterSlogan = styled.div`
  font-size: 1.2rem;
  margin-top: -30px;

  a {
    color: #9b2915;
    text-decoration: none;
    transition: all .3s;

    &:hover {
      color: #e4d6a7;
    }
  }
`;