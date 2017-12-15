import React, {Component} from 'react';
import SocialLogin from 'react-social-login';

class Button extends Component {
	render() {
		const {children, triggerLogin, ...props} = this.props;
		return (
			<button onClick={triggerLogin} {...props}>
			  { children }
			</button>
		)
	}
} 

export default SocialLogin(Button)