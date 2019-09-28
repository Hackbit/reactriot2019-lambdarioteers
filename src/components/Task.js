import React from "react";
import styled from "styled-components";

const Task = ({ task, history }) => {
  const { 
    id, 
    name, 
    locationInput, 
    time, 
    pointsToEarn, 
    img,
    description 
  } = task;
  return (
    <TaskContainer
      onClick={() => {
        history.push(`/task/${id}`);
      }}
    >
      <TaskCard>
        <Top>
          <div className="img-container">
            <img
              src={img ? img : "https://via.placeholder.com/150"}
              alt="img url"
            />
          </div>
          <div className="text-container">
            <h1>{name}</h1>
            <p>Location: {locationInput}</p>
            <p>Time: {time}</p>
          </div>
        </Top>
        <p>Description: {description}</p>
        <p>Points: {pointsToEarn}</p>
      </TaskCard>
    </TaskContainer>
  );
};

const TaskContainer = styled.div`
  width: 100%;
`;

const TaskCard = styled.div`
  width: 80%;
  border: 1px solid black;
  margin: 0 auto;
  background: #e9b44c;
  text-align: left;
  padding: 15px;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    transform: scale(1.01);
  }
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1.2rem;

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .img-container {
    object-fit: contain;

    img {
      max-width: 100%;
    }
  }
`;

export default Task;
