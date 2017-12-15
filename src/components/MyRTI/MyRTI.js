import React,{Component} from 'react';
import {connect} from 'react-redux';
import './MyRTI.css';
import { AUTH_LOGOUT_REQUEST } from '../../constant';
import { push } from 'react-router-redux';
import MyRTIList from './MyRTIList';
import {getUserName} from '../../lib/Helper';
import PrivateRoute from '../../router/PrivateRoute';
import {LinkContainer} from 'react-router-bootstrap';
import ChangePassword from './ChangePassword';
import { Switch } from 'react-router-dom';
import {NavItem} from 'react-bootstrap';
import Verify from '../MobileVerificationAlert/Verify';
class MyRTI extends Component {
	
	logout() {
		const { dispatch } = this.props;
	  	return new Promise((resolve, reject) => {
	    	dispatch({
	      		type: AUTH_LOGOUT_REQUEST,
	      		callbackSuccess: () => {
	        		dispatch(push('/'));
	        		resolve();
	      		}
	    	})
	  	});
	}
	render() {
		
		const {user} = this.props;
		const { firstLetter, name } = getUserName(user.email);
		
		return (
			<div className="dashborad-group padding-40">
				<div className="container">
					<Verify user={user}/>
					<div className="main-head-black-mid">All your RTI Applications are here</div>
					<div className="padding-top50 row">
						<div className="col-sm-4">
							<div className="nameGroup">
								<div className="nameTittle">{firstLetter}</div>
								<div className="nameTags">
									<span>{name}</span>
									<span>{user.email}</span>
								</div>
							</div>
							<ul className="dash-list">
						        <LinkContainer to="/myrti/dashboard">
					            	<NavItem eventKey={1}> My RTI </NavItem>
					            </LinkContainer>
					            <LinkContainer to="/myrti/change-password">
					            	<NavItem eventKey={2}> Change Password </NavItem>
					            </LinkContainer>
								<li><a onClick={() => this.logout()}>Logout</a></li>
							</ul>
						</div>
						<div className="col-sm-8">
							<div className="dashboard-content">
								<Switch>
									<PrivateRoute path="/myrti/dashboard" component={MyRTIList} />						
									<PrivateRoute path="/myrti/change-password" component={ChangePassword} />						
								</Switch>	
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.auth.user
});

export default connect(mapStateToProps)(MyRTI);