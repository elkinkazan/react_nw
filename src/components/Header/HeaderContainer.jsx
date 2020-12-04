import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {authorize} from './../../redux/authReducer';
import * as axios from 'axios'

class HeaderContainer extends React.Component {
    componentDidMount = () => {
      axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
                {withCredentials : true})
           .then(response => {authorize(response.data.data)})
    }

    render() {
        return (
          <Header isAuthorized = {this.props.isAuthorized}/>
        );
    }
}

let mapStateToProps = (state) => {
  return ({
      isAuthorized: state.sAuthorized
  })
}

export default connect(mapStateToProps, {authorize})(HeaderContainer);
