import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Dashboard.css';
import Sidebar from '../common/Sidebar';
import Http from '../../lib/Http';
import AppProgress from './AppProgress';
import AppStatus from './AppStatus';
import RTIApplication from './RTIApplication';
import TrackingDetails from './TrackingDetails';
import EditProfile from './EditProfile';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../../router/PrivateRoute';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	rtiinfo: {}
        }
    }
    componentDidMount() {
    	const {params} = this.props.match;
    	const {_id} = this.props.user;
    	Http.get(`/rti-info?_id=${_id}&rtino=${params.rtino}`)
    	.then(({data}) => this.setState({rtiinfo: data}))
    	.catch(errors => console.log(errors));
    }
    render() {
    	const { rtiinfo } = this.state; 
    	const {  rtino } = this.props.match.params;
        return (	
			<div className="dashborad-group padding-40">
				<div className="container">
                    
					<div className="row">
						<Sidebar rtino={rtino}/>
						<div className="col-sm-9">
                            <Switch>
                                <PrivateRoute path="/dashboard/app-progress/:any" rtiinfo={rtiinfo} component={AppProgress} />                      
                                <PrivateRoute path="/dashboard/app-status/:any" rtiinfo={rtiinfo} component={AppStatus} />                       
                                <PrivateRoute path="/dashboard/rti-application/:any" rtiinfo={rtiinfo} component={RTIApplication} />                       
                                <PrivateRoute path="/dashboard/tracking-details/:any" rtiinfo={rtiinfo} component={TrackingDetails} />                       
                                <PrivateRoute path="/dashboard/edit-profile/:any" initialValues={rtiinfo.rti} rtiinfo={rtiinfo} component={EditProfile} />                       
                            </Switch>
						</div>
					</div>
				</div>
			</div>	
		);
    }
}

const mapStateToProps = (state) => ({
	user: state.auth.user
});

export default connect(mapStateToProps)(Dashboard);
