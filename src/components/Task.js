import React from 'react'
import styled from 'styled-components'

const Task = ({ task, history }) => {
  const { id, name, locationInput, time, pointsToEarn, img } = task
  return (
    <TaskContainer onClick={() => {
      history.push(`/task/${id}`)
    }}>
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

export default Task

