import React from 'react';

const NoMatch = ({location}) => (
	<div>
		<h3>No match for <code>{location.pathname}</code></h3>
		<h4>404 Page Not Found!</h4>
	</div>
);

export default NoMatch;