import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const TaskCard = ({ tasks, match, history }) => {
  const task = tasks.find(item => `${item.id}` === match.params.id)

  const { name, locationInput, time, pointsToEarn, img } = task
  return (
    <TaskContainer>
      <h1>{name}</h1>
      <p>{locationInput}</p>
      <p>{time}</p>
      <p>{pointsToEarn}</p>
      <img src={img} alt="img url"/>
    </TaskContainer>
  )
}

const TaskContainer = styled.div`
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 30px;
`
const mapStateToProps = state => {
  return {
    tasks: state.taskReducer.tasks
  }
}
export default connect(mapStateToProps)(TaskCard)

