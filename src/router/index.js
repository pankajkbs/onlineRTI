import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Home from '../components/home/Home';
import About from '../components/AboutUs/About';
import AboutSingle from '../components/AboutUs/AboutSingle';
import Blog from '../components/blogs/Blog';
import BlogSingle from '../components/blogs/BlogSingle';
import cmsDetail from '../components/blogs/cmsDetail';
import Contacts from '../components/Contact/Contact';
import Faqs from '../components/Faq/Faq';
//import Applys from '../components/Apply/Apply';
import ApplyRTI from '../components/Apply/ApplyRTI';
import ApplyNow from '../components/Apply/ApplyNow';
import Track from '../components/Track/Track';
import NoMatch from '../components/NoMatch';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import MyRTI from '../components/MyRTI/MyRTI';
import Team from '../components/Team/Team';
import Pricing from '../components/Pricing/Pricing';
import Dashboard from '../components/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';

/*
We can use the<Switch> component to group <Route>s. 
The <Switch> will iterate over its children elements (the routes) and 
only render the first one that matches the current pathname.
*/

export const Router = props => {
	const { history } = props;
	return (
		<ConnectedRouter history={history}>
			<div>
				<Header/>
				<Switch>
					<Route path="/" exact={true} component={Home} />
					<Route path="/reset-password/:salt" component={Home} />
					<Route path="/about-us" component={About} />
					<Route path="/about/:slug" component={AboutSingle} />
					<Route path="/blog/:slug" component={BlogSingle} />
					<Route path="/cms/:slug" component={cmsDetail} />
					<Route path="/blog" component={Blog} />
					<Route path="/contact-us" component={Contacts} />
					<Route path="/faq" component={Faqs} />
					<Route path="/track-us" component={Track} />
					<Route path="/team" component={Team} />
					<Route path="/pricing" component={Pricing} />
					<Route path="/apply/:slug" component={ApplyRTI} />
					<Route path="/apply-now" component={ApplyNow} />
					<PrivateRoute path="/myrti/:any" component={MyRTI} />
					<PrivateRoute path="/dashboard/:tab/:rtino" component={Dashboard} />
					<Route path="*" component={NoMatch} />
				</Switch>
				<Footer/>
			</div>	
		</ConnectedRouter>
	);
}