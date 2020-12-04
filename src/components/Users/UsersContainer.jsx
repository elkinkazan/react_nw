import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {toggle, setUsers, setUsersCount, setUsersPageSize,
updateUsersPage, setIsFetching, setFollowing} from './../../redux/usersReducer';
import Preloader from './../../common/preloader';
import {usersAPI} from './../../api/usersAPI'


class UsersContainer extends React.Component {
  componentDidMount(){
    this.props.setIsFetching(true);
    usersAPI.getUsers(this.props.pageSize,this.props.currentPage)
            .then(data=>{this.props.setUsers(data.items);
               this.props.setUsersCount(data.totalCount);
               this.props.setIsFetching(false);})
  };
  onPageChange = (page) => {
    this.props.setIsFetching(true);
    this.props.updateUsersPage(page);

    usersAPI.getUsers(this.props.pageSize,page)
            .then(data=>{this.props.setUsers(data.items);
               this.props.setIsFetching(false);})
  }
  render() { return <>
                           {
                           this.props.isFetching?
                           <Preloader />:
                           <Users users={this.props.users}
                           photo={this.props.photos}
                           pageSize={this.props.pageSize}
                           count={this.props.count}
                           toggle={this.props.toggle}
                           followed={this.props.followed}
                           onPageChange={this.onPageChange}
                           setFollowing={this.props.setFollowing}
                           followingInProgress={this.props.followingInProgress}/>
                           }
                   </>
           }
}

const mapStateToProps = (state) => {
  return ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    count: state.usersPage.count,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  });
}
// const mapDispatchToProps = (dispatch) => {
//   return ({
//     toggle: (value) => dispatch(toggleAC(value)),
//     setUsers: (users) => dispatch(setUserAC(users)),
//     setUsersCount: (count) => dispatch(setUsersCountAC(count)),
//     setUsersPageSize: (page) => dispatch(setUsersPageSizeAC(page)),
//     updateUsersPage: (page) => dispatch(updateUsersPageAC(page)),
//     setIsFetching: (isFetching)=>dispatch(setIsFetchingAC(isFetching))
//   })
// }

export default connect(mapStateToProps,
  {toggle,setUsers,setUsersCount,
  setUsersPageSize,updateUsersPage,setIsFetching,setFollowing})(UsersContainer)
