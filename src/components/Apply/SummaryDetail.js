import React, {Component} from 'react';
import {Form, Button} from "react-bootstrap";

class SummaryDetail extends Component {
	render() {
		return(
			<div className="form-actions">
			    <div className="row">
			        <div className="col-sm-12">
			          <div className="step-forms padding-top50">
			          <Form className=" clearfix">
			              <div className="main-head-black-mid">SUMMARY & DETAILS</div>

			              <div className="row padding-top50">
			                  <div className="col-sm-6">
			                    <div className="form-group">
			                      <select className="form-control">
			                        <option> New RTI Query</option>
			                        <option> Exam Answer Copy</option>
			                        <option> Student</option>
			                        <option> Status of Complaint</option>
			                        <option> EPF Withdrawal Status</option>
			                      </select>
			                    </div>
			                  </div>
			                  <div className="col-sm-6">
			                    <div className="form-group">
			                      <select className="form-control">
			                        <option> Property Details</option>
			                        <option> Commencement Certificate</option>
			                        <option> Occupancy Certificate</option>
			                        <option> Owner of land/flat</option>
			                        <option> Others</option>
			                      </select>
			                    </div>
			                  </div>
			              </div>

			              <div className="row">
			                  <div className="col-sm-6">
			                    <div className="form-group">
			                      <select className="form-control">
			                        <option> Passport Status</option>
			                        <option> IncomeTax Refund</option>
			                        <option> FIR Status</option>
			                        <option> EPF Transfer Status</option>
			                        <option> EPF Withdrawal Status</option>
			                        <option> RoadTax Refund Status</option>
			                      </select>
			                    </div>
			                  </div>
			                  <div className="col-sm-6">
			                    <div className="form-group">
			                      <select className="form-control">
			                        <option> MP Fund Utilization</option>
			                        <option> MLA Fund Utilization</option>
			                        <option> Gram Panchayat</option>
			                        <option> Fund Utilization</option>
			                        <option> Tender Details</option>
			                        <option> Road Works</option>
			                      </select>
			                    </div>
			                  </div>
			              </div>

			              <h2 className="heading-rti">RTI Query for Commencement certificate of a building</h2>
			              <div className="row">
			                  <div className="col-sm-6">
			                    <div className="form-group">
			                      <input className="form-control" placeholder="Constituency" type="text"/>
			                    </div>
			                  </div>
			                  <div className="col-sm-6">
			                    <div className="form-group">
			                      <input className="form-control" placeholder="District" type="text"/>
			                    </div>
			                  </div>
			              </div>

			              <div className="row">
			                  <div className="col-sm-6">
			                    <div className="form-group">
			                      <input className="form-control" placeholder="From (Year)" type="text"/>
			                    </div>
			                  </div>
			                  <div className="col-sm-6">
			                    <div className="form-group">
			                      <input className="form-control" placeholder="To (Year)" type="text"/>
			                    </div>
			                  </div>
			              </div>

			              <div className="row">
			                  <div className="col-sm-12">
			                    <div className="form-group">
			                      <textarea className="form-control" rows="3" placeholder="More Information (optional)"></textarea>
			                    </div>
			                  </div>
			              </div>
			              <button type="button" className="btn btn-info btn-block italic-font">Submit</button>
			            </Form>
			        </div>
			        </div>
			        <div className="col-sm-12">
			            <ul className="pager wizard no-margin">
			                <li className="previous disabled">
			                    <Button type="button" className="btn btn-lg btn-default"> Previous </Button>
			                </li>
			                <li className="next">
			                    <Button type="button" className="btn btn-lg txt-color-darken"> Next </Button>
			                </li>
			            </ul>
			        </div>
			    </div>
			</div>
		);
	}
}

export default SummaryDetail;