import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import Task from './Task'

const TaskView = ({ tasks, history }) => {
  if (tasks.length === 0) {
    return <h1>Add new Task</h1>
  }
  return (
    <TaskViewContainer>
      <h1>Available Tasks</h1>
      <TasksContainer>
        {tasks.map(task => {
          return <Task key={task.id} task={task} history={history}/> 
        })}
      </TasksContainer>
    </TaskViewContainer>
  )
}
const mapStateToProps = (state) => {
  return {
    tasks: state.taskReducer.tasks
  }
}

const TaskViewContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: #50a2a7;
`;

const TasksContainer = styled.div`
  width: 100%;
`;

export default connect(mapStateToProps)(TaskView)
