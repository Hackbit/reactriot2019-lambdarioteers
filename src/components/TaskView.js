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

const TaskViewContainer = styled.div``
const TasksContainer = styled.div``

export default connect(mapStateToProps)(TaskView)
