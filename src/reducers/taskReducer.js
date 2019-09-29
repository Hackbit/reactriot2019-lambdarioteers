import {
  ADD_TASK,
  DELETE_TASK,
  POPULATE_FORM,
  UPDATE_TASK,
  CANCEL
} from '../actions/taskActions';

const initialState = {
  tasks: [
    {
      id: 1,
      name: "School supplies fundraiser",
      locationInput: "Los Angeles, CA",
      time: "9/31/2019",
      pointsToEarn: 25,
      description: "Gathering any and all supplies to help support the less fortunate students during the back-to-school season.",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1009&q=80"
    },
    {
      id: 2,
      name: "Serve lunch to the homeless",
      locationInput: "Nashville, TN",
      time: "10/2/2019",
      pointsToEarn: 35,
      description: "Spending the afternoon in Nashville, delivering food to the homeless individuals around town from 12:00pm to 4:00pm!",
      img: "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
    },
    {
      id: 3,
      name: "Food preparation for the elderly and disabled",
      locationInput: "Portland, OR",
      time: "10/8/2019",
      pointsToEarn: 50,
      description: "Gathering the city of Portland to create individual meals for the elderly and disabled individuals in town. All day long!",
      img: "https://images.unsplash.com/photo-1562166351-8547c7362981?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
    }
    
  ],
  isUpdating: false,
  id: '',
  name: '',
  locationInput: '',
  time: '',
  pointsToEarn: null,
  img: ''
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case POPULATE_FORM:
      return {
        ...state,
        isUpdating: true,
        id: action.payload.id,
        name: action.payload.name,
        locationInput: action.payload.locationInput,
        time: action.payload.time,
        pointsToEarn: action.payload.pointsToEarn,
        img: action.payload.img
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              name: action.payload.name,
              locationInput: action.payload.locationInput,
              time: action.payload.time,
              pointsToEarn: action.payload.pointsToEarn,
              img: action.payload.img
            };
          }
          return task;
        }),
        isUpdating: false,
        id: '',
        name: '',
        locationInput: '',
        time: '',
        pointsToEarn: null,
        img: ''
      };
    case CANCEL:
      return {
        ...state,
        isUpdating: false,
        id: '',
        name: '',
        locationInput: '',
        time: '',
        pointsToEarn: null,
        img: ''
      };
    default:
      return state;
  }
};

export default taskReducer;
