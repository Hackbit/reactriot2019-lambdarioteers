import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import Task from './Task'

const TaskView = ({ tasks }) => {
  if (tasks.length === 0) {
    return <h1>Add new Task</h1>
  }
  return (
    <TaskViewContainer>
      {tasks.map(task => {
        return <Task key={task.id} task={task}/> 
      })}
    </TaskViewContainer>
  )
}
const mapStateToProps = (state) => {
  return {
    tasks: state.taskReducer.tasks
  }
}

const TaskViewContainer = styled.div``
export default connect(mapStateToProps)(TaskView)
