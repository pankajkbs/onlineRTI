import './bootstrap'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import {store, history} from './store';

// Vendor CSS
import "react-spinner/react-spinner.css";
import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Application CSS

// customized bootstrap css
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/fonts/fonts.css';
import './assets/css/custom.css';
import './assets/css/responsive.css';
import './assets/css/spinner.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  	<Provider store={store}>
    	<App history={history} />
  	</Provider>,
  	document.getElementById('root')
);

if (module.hot) {
  	module.hot.accept('./components/App', () => {
    	ReactDOM.render(
      		<Provider store={store}>
        		<App history={history} />
      		</Provider>,
      		document.getElementById('root'),
    	)
  	});
}
registerServiceWorker();