import React, { useState } from "react";
import styled from "styled-components";

const Task = ({ task, history }) => {
  const { id, name, locationInput, time, pointsToEarn, img, description } = task;
  const [isVolunteer, setIsVolunteer] = useState(true);
  return (
    <TaskContainer
      onClick={() => {
        history.push(`/task/${id}`);
      }}
    >
      <TaskCard>
        <Top>
          {isVolunteer && <AddTaskButton><i class="fas fa-plus"></i></AddTaskButton>}
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
  margin: 20px auto;
  background: #e9b44c;
  text-align: left;
  padding: 15px;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 8px 8px 10px 3px rgba(0, 0, 0, .8);
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

const AddTaskButton = styled.button`
  position: absolute;
  right: 50px;
  border: none;
  border-radius: 3px;
  padding: 4px;
  font-size: 1.3rem;
  background: none;
  transition: all .3s;
  cursor: pointer;

  &:hover {
      background: #e4d6a7;
  }
`;

export default Task;
