import axios from 'axios';
import lodash from 'lodash';
import {Cookie} from './lib/Cookie';
import {networkAlert} from './lib/Helper';

window.axios = axios;
window._ = lodash;

window.axios.defaults.headers.common = {'X-Requested-With': 'XMLHttpRequest'};
window.axios.defaults.baseURL = 'http://rtiguru.com:9000/api/';

// Global images url
window.IMAGE_PATH = 'http://rtiguru.com:9000';

// Add a request interceptor
axios.interceptors.request.use( function(config) {
  	// Do something before request is sent
    const token = Cookie.get('token'); 
    if( token ) {
      config.headers = {
        Authorization: `Bearer ${token}`
      }
    }
  	return config;
}, function (error) {
  	// Do something with request error
  	return Promise.reject(error);
})

// Add a response interceptor
axios.interceptors.response.use( function(response) {
  	// Do something with response data
    
  	return response;
},  function(error) {
	if(!error.response && error.message === 'Network Error'){
		networkAlert();
	}
	
  	// Do something with response error
  	return Promise.reject(error);
});
