import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import TaskView from './TaskView';

const Dashboard = ({ history, users }) => {
  let user = users.filter(user => user.id === +localStorage.getItem('id'))[0];
  return (
    <DashboardWrapper>
      <h1>Dashboard</h1>
      {user && user.user_type === 'Charity' && (
        <AddTaskButton onClick={() => history.push('/task-form')}>
          + New Task
        </AddTaskButton>
      )}
      <hr />
      <TaskView history={history} />
    </DashboardWrapper>
  );
};

const mapPropsToProps = state => {
  return { users: state.userReducer.users };
};

export default connect(
  mapPropsToProps,
  null
)(Dashboard);

const DashboardWrapper = styled.div`
    background: #50a2a7;
    margin-top: -22px;
    padding-top: 24px;

    hr {
        background: black;
        border: none;
        height: 1px;
        width: 80%
        margin-top: 15px;
    }
`;

const AddTaskButton = styled.button`
  border: none;
  border-radius: 3px;
  width: 60%;
  padding: 8px;
  font-size: 1rem;
  background: #e9b44c;
  transition: all 0.3s;
  margin: 12px 0;

  &:hover {
    background: #9b2915;
    color: white;
  }
`;
