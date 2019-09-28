import React from "react";
import styled from "styled-components";

const Task = ({ task, history }) => {
  const { id, name, locationInput, time, pointsToEarn, img } = task;
  return (
    <TaskContainer
      onClick={() => {
        history.push(`/task/${id}`);
      }}
    >
      <Top>
        <div className="img-container">
          <img
            src={img ? img : "https://via.placeholder.com/150"}
            alt="img url"
          />
        </div>
        <div className="text-container">
          <h1>{name}</h1>
          <p>{locationInput}</p>
          <p>{time}</p>
        </div>
      </Top>
      <p>{pointsToEarn}</p>
    </TaskContainer>
  );
};

const TaskContainer = styled.div`
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 30px;
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
