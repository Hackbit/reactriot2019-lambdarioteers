import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { deleteTask, populateForm } from '../actions/taskActions'

const TaskCard = ({ tasks, match, history, deleteTask, populateForm }) => {
  const task = tasks.find(item => `${item.id}` === match.params.id)
  const { id, name, locationInput, time, pointsToEarn, img } = task

  const deleteTaskHandler = () => {
    deleteTask(id)
    history.push("/task-view")
  }

  const populateFormHandler = () => {
    populateForm(task)
    history.push("/task-form")
  }

  return (
    <TaskContainer>
      <TaskDiv>
        <h1>{name}</h1>
        <img src={img} alt="img url"/>
        <p>Location: {locationInput}</p>
        <p>Time: {time}</p>
        <p>Points: {pointsToEarn}</p>
      </TaskDiv>
      <ButtonContainer>
        <TaskButton onClick={deleteTaskHandler}>Delete</TaskButton>
        <TaskButton onClick={populateFormHandler}>Update</TaskButton>
      </ButtonContainer>

    </TaskContainer>
  )
}

const mapStateToProps = state => {
  return {
    tasks: state.taskReducer.tasks
  }
}
export default connect(mapStateToProps, { deleteTask, populateForm })(TaskCard)

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
  transition: all .3s;
  margin: 12px 0;

  &:hover {
      background: #9b2915;
      color: white;
  }
`;

