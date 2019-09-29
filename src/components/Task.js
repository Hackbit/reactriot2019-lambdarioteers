import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { saveTask } from '../actions/userActions';

const Task = ({ task, history, tasks, users, saveTask }) => {
  const {
    id,
    name,
    locationInput,
    time,
    pointsToEarn,
    img,
    description
  } = task;
  let taskCard = tasks.filter(task => task.id === id);
  let user = users.filter(user => user.id === +localStorage.getItem('id'))[0];

  const saveTaskCard = e => {
    e.stopPropagation();
    saveTask(user.id, taskCard[0].id);
  };

  return (
    <TaskContainer
      onClick={() => {
        history.push(`/task/${id}`);
      }}
    >
      <TaskCard saved_task={user && user.tasks.includes(id)}>
        <Top>
          <div className="img-container">
            <img
              src={img ? img : 'https://via.placeholder.com/150'}
              alt="img url"
            />
          </div>
          <div className="text-container">
            <h1>{name}</h1>
            <p>Location: {locationInput}</p>
            <p>Time: {time}</p>
          </div>
        </Top>
        <Bottom>
          <TextContainer>
            <p>Description: {description}</p>
            <p>Points: {pointsToEarn}</p>
          </TextContainer>
          {user && user.user_type === 'Volunteer' && (
            <AddTaskButton
              saved_task={user && user.tasks.includes(id)}
              onClick={e => {
                saveTaskCard(e);
              }}
            >
              {user.tasks.length > 0 && user.tasks.includes(id) ? (
                <i className="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
            </AddTaskButton>
          )}
        </Bottom>
      </TaskCard>
    </TaskContainer>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { tasks: state.taskReducer.tasks, users: state.userReducer.users };
};

export default connect(
  mapStateToProps,
  { saveTask }
)(Task);

const TaskContainer = styled.div`
  width: 100%;
`;

const TaskCard = styled.div`
  width: 80%;
  max-width: 400px;
  margin: 20px auto;
  background: ${props => (props.saved_task ? '#e4d6a7' : '#e9b44c')};
  text-align: left;
  padding: 15px;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 8px 8px 10px 3px rgba(0, 0, 0, 0.8);
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

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddTaskButton = styled.button`
  //position: absolute;
  //right: 50px;
  align-self: flex-end;
  border: none;
  border-radius: 3px;
  padding: 4px;
  font-size: 1.3rem;
  background: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: ${({ saved_tasks }) => (saved_tasks ? '#e4d6a7' : '#e9b44c')};
  }
`;
