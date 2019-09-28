import { ADD_TASK, DELETE_TASK, POPULATE_FORM, UPDATE_TASK, CANCEL } from '../actions/taskActions'

const initialState = {
  tasks: [
    {
      id: 1,
      name: "Funraiser",
      locationInput: "East Los Angeles",
      time: "9/25/2019",
      pointsToEarn: 25,
      img: ""
    }
  ],
  isUpating: false,
  name: "",
  locationInput: "",
  time: "",
  pointsToEarn: null,
  img: ""
}

const taskReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    case POPULATE_FORM:
      return {
        ...state,
        isUpdating: true,
        name: action.payload.name,
        locationInput: action.payload.locationInput,
        time: action.payload.time,
        pointsToEarn: action.payload.pointsToEarn,
        img: action.payload.img
      }
    case UPDATE_TASK:
      return {
        ...state,
        isUpdating: false,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              name: action.payload.name,
              locationInput: action.payload.locationInput,
              time: action.payload.time,
              pointsToEarn: action.payload.pointsToEarn,
              img: action.payload.img
            }
          }
          return task
        })
      }
    case CANCEL:
      return {
        ...state,
        isUpdating: false
      }
    default:
      return state
  }
}

export default taskReducer