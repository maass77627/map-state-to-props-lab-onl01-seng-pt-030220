import React, { Component } from 'react';
import connect from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          this.props.users.map(user => user.username)
          this.props.users.count
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* Inaddition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
  }

}
export default connect(mapStateToProps)(Users)
// connect this component to Redux
// export default Users
