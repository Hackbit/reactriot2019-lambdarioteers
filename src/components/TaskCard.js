import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { deleteTask, populateForm } from "../actions/taskActions";

const TaskCard = ({ tasks, match, history, deleteTask, populateForm }) => {
  const task = tasks.find(item => `${item.id}` === match.params.id);
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
    description
  } = task;

  const deleteTaskHandler = () => {
    deleteTask(id);
    history.push("/task-view");
  };

  const populateFormHandler = () => {
    populateForm(task);
    history.push("/task-form");
  };

  return (
    <TaskContainer>
      <TaskDiv>
        <h1>{name}</h1>
        <ImageContainer>
          <img
            src={img ? img : "https://via.placeholder.com/150"}
            alt="img url"
          />
        </ImageContainer>
        <p>Location: {locationInput}</p>
        <p>Time: {time}</p>
        <p>Description: {description}</p>
        <p>Points: {pointsToEarn}</p>
      </TaskDiv>
      <ButtonContainer>
        <TaskButton onClick={deleteTaskHandler}>Delete</TaskButton>
        <TaskButton onClick={populateFormHandler}>Update</TaskButton>
      </ButtonContainer>
    </TaskContainer>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.taskReducer.tasks
  };
};
export default connect(
  mapStateToProps,
  { deleteTask, populateForm }
)(TaskCard);

const TaskContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #e9b44c;
  padding-top: 40px;

  button {
    cursor: pointer;
  }
`;

const TaskDiv = styled.div`
  width: 80%;
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
