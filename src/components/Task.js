import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { saveTask } from "../actions/userActions";
import { isUserWhitespacable } from '@babel/types';

const Task = ({ task, history, tasks, users, saveTask }) => {
  const {
    id,
    name,
    locationInput,
    time,
    pointsToEarn,
    img,
    description
  } = task;
  let taskCard = tasks.filter(task => task.id === id);
  let user = users.filter(user => user.id === (+localStorage.getItem('id')))[0];

  const saveTaskCard = (e) => {
    e.stopPropagation();
    saveTask(user.id, taskCard);
  }

  return (
    <TaskContainer
      onClick={() => {
        history.push(`/task/${id}`);
      }}
    >
      <TaskCard>
        <Top>
          {/* {user.user_type === "Volunteer" && 
            <AddTaskButton
              onClick={e => {
                saveTaskCard(e);
              }}
            >
              <i className="fas fa-plus"></i>
            </AddTaskButton>
          } */}
          <div className="img-container">
            <img
              src={img ? img : 'https://via.placeholder.com/150'}
              alt="img url"
            />
          </div>
          <div className="text-container">
            <h1>{name}</h1>
            <p>Location: {locationInput}</p>
            <p>Time: {time}</p>
          </div>
        </Top>
        <p>Description: {description}</p>
        <p>Points: {pointsToEarn}</p>
      </TaskCard>
    </TaskContainer>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return { tasks: state.taskReducer.tasks, users: state.userReducer.users };
}

export default connect(
  mapStateToProps,
  { saveTask }
)(Task);

const TaskContainer = styled.div`
  width: 100%;
`;

const TaskCard = styled.div`
  width: 80%;
  max-width: 400px;
  margin: 20px auto;
  background: #e9b44c;
  text-align: left;
  padding: 15px;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 8px 8px 10px 3px rgba(0, 0, 0, 0.8);
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1.2rem;

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .img-container {
    object-fit: contain;

    img {
      max-width: 100%;
    }
  }
`;

const AddTaskButton = styled.button`
  position: absolute;
  right: 50px;
  border: none;
  border-radius: 3px;
  padding: 4px;
  font-size: 1.3rem;
  background: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: #e4d6a7;
  }
`;
