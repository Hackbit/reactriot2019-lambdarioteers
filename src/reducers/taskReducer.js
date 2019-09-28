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
    default:
      return state
  }
}

export default taskReducer