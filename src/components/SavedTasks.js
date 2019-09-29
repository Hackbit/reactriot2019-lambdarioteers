import React from 'react';
import { connect } from 'react-redux';


const SavedTasks = props => {
    return (
        <div>
            {console.log(props.users[0].id)}
        </div>
    );
};
const mapStateToProps = state => {
    // console.log(state)
    return { users: state.userReducer.users}
}
export default connect(
    mapStateToProps, 
    null
)(SavedTasks);