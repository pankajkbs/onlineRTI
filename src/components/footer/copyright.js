import React from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const Copyright = (props) => (
	 <div className="copyRight clearfix">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <ul className="text-center">
              <li><a>{props.data.site.copyright}</a></li>
              {props.data.footer.length > 0 
                ? props.data.footer.map((value, index) => <li key={index}><Link to={`/cms/${value.slug}`}>{value.title}</Link></li>)
                : null
              }  
            </ul>
          </div>
          {/*<div className="col-md-4 col-sm-6 col-xs-12 text-right">
            <span>Powered By: <text>Webpristine Technology</text></span>
          </div>*/}
        </div>
      </div>
    </div>
);

export default Copyright;