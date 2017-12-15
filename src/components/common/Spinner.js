import React from 'react';
import ReactSpinner from 'react-spinner';
export const Spinner = () => {
	const style = {
  		height: 50,
  		width: 50,
  		backgroundColor: 'black',
  		position: 'relative',
  		top: 200,
  		left: '50%'
	};
	return (<div style={style}><ReactSpinner /></div>);
};