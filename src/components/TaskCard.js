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
      <div>
        <h1>{name}</h1>
        <p>{locationInput}</p>
        <p>{time}</p>
        <p>{pointsToEarn}</p>
        <img src={img} alt="img url"/>
      </div>
      <div>
        <button onClick={deleteTaskHandler}>Delete</button>
        <button onClick={populateFormHandler}>Update</button>
      </div>

    </TaskContainer>
  )
}

const TaskContainer = styled.div`
  padding: 10px;
  cursor: pointer;
  margin-bottom: 30px;
`
const mapStateToProps = state => {
  return {
    tasks: state.taskReducer.tasks
  }
}
export default connect(mapStateToProps, { deleteTask, populateForm })(TaskCard)

