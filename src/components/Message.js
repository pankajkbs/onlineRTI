import React from 'react';
import {Alert} from "react-bootstrap";


class Message extends React.Component {
	render () {
		if( this.props.text.length > 0 ) {
			return (
				<Alert bsStyle={this.props.className}>
			    	<strong>{this.props.text}</strong>.
			  	</Alert>
			);
		} else {
			return null;
		}
	}
}
		
export default Message;