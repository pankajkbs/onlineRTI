const networkAlert = () => {
	const alert = document.getElementById("alert");
	alert.className = 'alert alert-danger';
	setTimeout(() => {
		alert.className = 'alert alert-danger hidden';
	}, 5000);
}

const getUserName = (email) => {
	let extractFirstPart = email.split('@')[0];
	return {
		firstLetter: extractFirstPart.charAt(0).toUpperCase(),
		name: extractFirstPart.charAt(0).toUpperCase() + extractFirstPart.slice(1)
	}
}

const rtiSidebar = (match, location) => location.pathname.includes('myrti') || location.pathname.includes('dashboard');

export {
	networkAlert, getUserName, rtiSidebar
}
