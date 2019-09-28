import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import Task from './Task'

const TaskView = ({ tasks, history }) => {
  if (tasks.length === 0) {
    return (
      <TaskViewContainer>
        <h1>No Current Tasks</h1>
        <AddTaskButton onClick={() => history.push("/task-form")}>+ New Task</AddTaskButton>
      </TaskViewContainer>
    )
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

export default connect(mapStateToProps)(TaskView)

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

const AddTaskButton = styled.button`
  border: none;
  border-radius: 3px;
  width: 76%;
  padding: 14px;
  font-size: 1rem;
  background: #e9b44c;
  transition: all .3s;
  margin: 12px 0;

  &:hover {
      background: #9b2915;
      color: white;
  }
`;
