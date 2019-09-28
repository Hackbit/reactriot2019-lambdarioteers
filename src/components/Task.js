import React from 'react'

const Task = ({ task }) => {
  const { name, location, time, pointsToEarn, img } = task
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <p>{time}</p>
      <p>{pointsToEarn}</p>
      <img src={img} alt="img url"/>
    </div>
  )
}

export default Task

