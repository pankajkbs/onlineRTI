import Http from '../lib/Http';
export function login(url, options={}) {
	return new Promise((resolve, reject) => {
		Http.post(url, options)
		.then(({records}) => {
			resolve({token: records.token,user: records.user });
		})
		.catch(error => {
			reject((error.response) ? error.response.data : error);
		});
	});
}