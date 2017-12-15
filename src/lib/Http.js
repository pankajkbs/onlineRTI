/* global axios */
class Http {
  	static get(url) {
  		return new Promise((resolve, reject) => {
			axios.get(url)
			.then(response => {
				resolve(response.data);
			})
			.catch(error => {
				reject((error.response) ? error.response.data : error);
			});
		});
  	}
	static post(url, data) {
		return new Promise((resolve, reject) => {
			axios.post(url, data)
			.then(response => {
				resolve(response.data);
			})
			.catch(error => {
				reject((error.response) ? error.response.data : error);
			});
		});
	}
	static put(url, data) {
		return new Promise((resolve, reject) => {
			axios.put(url, data)
			.then(response => {
				resolve(response.data);
			})
			.catch(error => {
				reject((error.response) ? error.response.data : error);
			});
		});
	}
	static delete() {}
}

export default Http