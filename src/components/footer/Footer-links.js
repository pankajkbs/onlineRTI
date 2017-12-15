import React, {Component} from 'react';
import {connect} from 'react-redux';
import { SHOW_LOGIN_POPUP } from '../../constant';
import { push } from 'react-router-redux';

// The Header creates links that can be used to navigate
// between routes.
class FooterLinks extends Component { 
	checkState(value) {
	    const {token, dispatch} = this.props;
	    if( token ) {
	        dispatch(push(`/apply/${value.slug}`));
	    } else {
	        this.props.dispatch({
	            type: SHOW_LOGIN_POPUP,
	            displayLoginPopup: true
	        });
	    }
	}
	render() {
		const {data, categories} = this.props;
		return (
			<footer className="padding-40 clearfix">
		      <div className="container">
		          <div className="row">
		            <div className="col-sm-4 col-md-4">
		                <div className="footer-head">About Us</div>
		                <p className="footer-para">
		                  {data.site.summary}
		                </p>
		            </div>
		            <div className="col-sm-4 col-md-4 top-xs-mobile-40">
		                <div className="footer-head">Provide Services</div>
		                <ul className="services-links">
		                  {categories.map((value, index) => {
		                      return (
		                          <li key={index}>
		                            <a onClick={() => this.checkState(value)}>{value.title}</a>
		                          </li>
		                      );
		                  })}
		                </ul>
		            </div>
		            <div className="col-sm-4 col-md-4 top-mobile-40">
		                <ul className="address-list clearfix">
		                  <li>
		                    <div className="address-icon">
		                      <i className="fa fa-map-marker" aria-hidden="true"></i>
		                    </div>
		                    <div className="address-box">
		                        <h2>Address:</h2>
		                        <span>{data.site.address}</span>
		                    </div>
		                  </li>
		                  <li>
		                    <div className="address-icon">
		                      <i className="fa fa-mobile" aria-hidden="true"></i>
		                    </div>
		                    <div className="address-box">
		                        <h2>Phone:</h2>
		                        <span><a>{data.site.callus}</a></span>
		                    </div>
		                  </li>
		                  <li>
		                  	
		                    <div className="address-icon">
		                      <i className="fa fa-envelope-o" ></i>
		                    </div>
		                    <div className="address-box">
		                        <h2>Email:</h2>
		                        <span><a>{data.site.email}</a></span>
		                    </div>
		                  </li>
		                </ul>
		                <div className="share-social-list">
		                  <h2>Social:</h2>
		                  <ul>
		                    {data.socials.map((value, index) => {
		                      return (
		                        <li key={index}><a href={value.post_link} target="_blank"> &nbsp;
		                          <i className={`fa fa-${value.slug}`} aria-hidden="true"></i></a></li>
		                      )
		                    })}
		                  </ul>
		                </div>
		            </div>
		          </div> 
		      </div>
		    </footer>
		);
	}
}

const mapStateToProps = (state) => ({
    token: state.auth.token
});

export default connect(mapStateToProps)(FooterLinks);