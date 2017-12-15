import React from 'react';


const TrackForms = () => (
  <div>
  		<div className="track padding-40 clearfix">
        <form className="rti-application-form clearfix">
          <div className="main-head-black-mid">Track your RTI application</div>
          <div className="form-group padding-top50">
            <input className="form-control" placeholder="Application ID" type="text"/>
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Email" type="text"/>
          </div>
          <button type="button" className="btn btn-info btn-block italic-font">Submit</button>
        </form>
       </div>
  </div>
);

export default TrackForms;