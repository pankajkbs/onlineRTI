import React from 'react';
export const Loader = ({small}) => (
	<div className="marginTop10">
		<div className={`loader ${small ? 'loader-small' : 'loader-default'}`}>Loading ...</div>
	</div>
);