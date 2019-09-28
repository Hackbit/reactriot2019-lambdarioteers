import { ADD_TASK } from '../actions/taskActions'

const initialState = {
  tasks: [
    {
      id: 1,
      name: "Funraiser",
      location: "East Los Angeles",
      time: "9/25/2019",
      pointsToEarn: 25,
      img: ""
    }
  ]
}

const taskReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    default:
      return state
  }
}

export default taskReducer