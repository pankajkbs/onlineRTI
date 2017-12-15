/* global axios, _ */
import React, {Component} from 'react';
import Copyright from '../footer/copyright';
import FooterLinks from '../footer/Footer-links';
import Http from '../../lib/Http';


// The Header creates links that can be used to navigate
// between routes.
class Footer extends Component {
	constructor() {
		super();
		this.state = {
			categories: [],
			settings: {}
		};
	}
	componentDidMount() {
		axios.all([Http.get('settings'), Http.get('list-categories')])
		.then(axios.spread((settings, categories) => this.setState({categories: categories.data, settings: settings.data}) ))
		.catch(errors => console.log(errors));
	}
	render() {
		const {categories, settings} = this.state;
		if( !_.isEmpty(categories) && !_.isEmpty(settings)) {
			return (
				<div>
					<FooterLinks categories={categories} data={settings}/>
					<Copyright data={settings}/>
				</div>
			);	
		} else{
			return null;
		}
		
	}
}	
export default Footer;