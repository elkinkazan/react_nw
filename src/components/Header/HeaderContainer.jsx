import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {authorize} from './../../redux/authReducer';
import * as axios from 'axios'

class HeaderContainer extends React.Component {
    componentDidMount = () => {
      axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
                {withCredentials : true})
           .then(response => {
                if (response.data.resultCode === 0)
                  {this.props.authorize(response.data.data)
                   console.log(this.props)}
                }
           )
    }

    render() {
        return (
          <Header {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
  return ({
      isAuthorized: state.auth.isAuthorized,
      login: state.auth.login
  })
}

export default connect(mapStateToProps, {authorize})(HeaderContainer);
