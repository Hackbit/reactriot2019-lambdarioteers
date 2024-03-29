import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toast } from 'react-toastify'
import { css } from "glamor";

import { deleteTask, populateForm, removeTask } from '../actions/taskActions';

const TaskCard = ({
  tasks,
  match,
  history,
  deleteTask,
  populateForm,
  users
}) => {
  const task = tasks.find(item => `${item.id}` === match.params.id);
  let user = users.filter(user => user.id === +localStorage.getItem('id'))[0];

  if (!task) {
    return (
      <TaskContainer>
        <h1>Task not found...</h1>
      </TaskContainer>
    );
  }

  const {
    id,
    name,
    locationInput,
    time,
    pointsToEarn,
    img,
    description,
    user_id
  } = task;

  const deleteTaskHandler = () => {
    deleteTask(id);
    toast.success('Delete success',  {
      className: css({
        backgroundColor: '#9b2915 !important' 
      }),
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: true,
      autoClose: 2500
    });
    history.push('/task-view');
  };

  const populateFormHandler = () => {
    populateForm(task);
    history.push('/task-form');
  };

  return (
    <TaskContainer>
      <TaskDiv>
        <ImageContainer>
          <img
            src={img ? img : 'https://via.placeholder.com/150'}
            alt="img url"
          />
        </ImageContainer>
        <h1>{name}</h1>
        <p>
          <em>
            <u>Location:</u>
          </em>{' '}
          {locationInput}
        </p>
        <p>
          <em>
            <u>Time:</u>
          </em>{' '}
          {time}
        </p>
        <p>
          <em>
            <u>Description:</u>
          </em>{' '}
          {description}
        </p>
        <p>
          <em>
            <u>Points:</u>
          </em>{' '}
          {pointsToEarn}
        </p>
      </TaskDiv>
      {user && user_id === user.id && (
        <ButtonContainer>
          <TaskButton onClick={deleteTaskHandler}>Delete</TaskButton>
          <TaskButton onClick={populateFormHandler}>Update</TaskButton>
        </ButtonContainer>
      )}
    </TaskContainer>
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
  { deleteTask, populateForm, removeTask }
)(TaskCard);

const TaskContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #e9b44c;
  padding: 70px 0 50px;

  button {
    cursor: pointer;
  }
`;

const TaskDiv = styled.div`
  width: 60%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #50a2a7;
  text-align: left;
  border-radius: 3px;
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.8);
`;

const ImageContainer = styled.div`
  overflow: hidden;

  img {
    max-width: 100%;
    object-fit: contain;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`;

const TaskButton = styled.button`
  border: none;
  border-radius: 3px;
  width: 30%;
  padding: 5px 10px;
  background: pink;
  font-size: 1rem;
  background: #e4d6a7;
  transition: all 0.3s;
  margin: 12px 0;

  &:hover {
    background: #9b2915;
    color: white;
  }
`;
