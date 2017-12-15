import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
	
	const {token, rtiinfo, initialValues} = rest;
	return (
	  <Route {...rest} render={props => (
	    token ? (
	      <Component {...props} rtiinfo={rtiinfo} initialValues={initialValues}/>
	    ) : (
	      <Redirect to={{
	        pathname: '/',
	        state: { from: props.location }
	      }}/>
	    )
	  )}/>
	);
}

const mapStateToProps = (state) => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(PrivateRoute);