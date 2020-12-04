import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {setProfile} from './../../redux/profileReducer';
import {withRouter} from 'react-router-dom'

class ProfileContainer extends React.Component {

  componentDidMount = () => {
    let userId = this.props.match.params.userId;
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+userId, {
               withCredentials: true
              })
         .then(response=>{this.props.setProfile(response.data)})
  }

  render() {
     return (
          <Profile {...this.props} profile={this.props.profile} profileId={ this.props.match.params.userId}/>

     );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let dataComponent=withRouter(ProfileContainer);
export default connect(mapStateToProps,{setProfile})(dataComponent);
