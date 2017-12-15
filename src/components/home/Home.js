/* global _ */
import React from 'react';
import Banner from '../home/Banner';
import HomeTabs from '../home/HomeTabs';
import HomeAbout from '../home/HomeAbout';
import HelpFaqs from '../home/HelpFaqs';
import Help from '../home/Help';
import Testimonials from '../testimonials/Testimonials';
import BlogList from '../blogs/BlogList';
import EmailConfirmation from './EmailConfirmation';
import ResetPassword from '../Login/ResetPassword';


class Home extends React.Component {

	render() {
		const {path, params} = this.props.match;
		return (
			<div>
				<Banner />
				<EmailConfirmation {...this.props}/>
				{path.includes('reset-password') && !_.isEmpty(params) && <ResetPassword salt={params.salt} />}
				<HomeTabs />
				<HomeAbout />
				<HelpFaqs/>
				<Testimonials/>
				<Help/>
				<BlogList/>
			</div>
		);
	}
}
export default Home;