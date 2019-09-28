import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Task from "./Task";

const TaskCarousel = props => {
  let [curTask, setCurTask] = useState(0);
  let [tasks, setTasks] = useState(props.tasks);

  useEffect(() => {
    setTimeout(() => setCurTask((curTask + 1) % tasks.length), 6000);
  }, [curTask]);

  return (
    <div>{tasks && <Task history={props.history} task={tasks[curTask]} />}</div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { tasks: state.taskReducer.tasks };
};

export default connect(
  mapStateToProps,
  null
)(withRouter(TaskCarousel));
