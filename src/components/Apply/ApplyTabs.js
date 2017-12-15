import React from 'react';
import { Link } from 'react-router-dom';
import { Button} from "react-bootstrap";
import PersonalDetail from './PersonalDetail';
import RTIDetail from './RTIDetail';
import SummaryDetail from './SummaryDetail';

class ApplyTabs extends React.Component {
  render() {
    return(
      <div className="apply padding-40 clearfix">
        <div className="container">
          <div className="container">
            <div className="row">
              <article className="col-sm-12 col-md-12 col-lg-12 sortable-grid ui-sortable">
                  <div id="wid-id-0">
                        <div className="widget-body">

                            <div className="row">
                                
                              <div id="bootstrap-wizard-1" className="col-sm-12">
                                  <div className="form-bootstrapWizard">
                                      <ul className="bootstrapWizard form-wizard">
                                          <li className="active" >
                                              <Link to="/apply-now?q=step-1" >
                                                <span className="step">1</span> <span className="title">Personal Details</span> 
                                              </Link>
                                          </li>
                                          <li  className="">
                                              <Link to="/apply-now?q=step-2" className="active">
                                                <span className="step">2</span> <span className="title">RTI Details</span> 
                                              </Link>
                                          </li>
                                          <li  className="">
                                              <Link to="/apply-now?q=step-3" >
                                                <span className="step">3</span> <span className="title">Summary &amp; Details</span> 
                                              </Link>
                                          </li>
                                          <li >
                                              <Link to="/apply-now?q=step-4">
                                                <span className="step">4</span> <span className="title">Save and Continue</span> 
                                              </Link>
                                          </li>
                                      </ul>
                                      <div className="clearfix"></div>
                                  </div>
                                  <div className="tab-content">
                                      <div className="tab-pane active" id="tab1">
                                          <br/>
                                          <PersonalDetail />
                                      </div>
                                      <div className="tab-pane" id="tab2">
                                          <br/>
                                          <RTIDetail />
                                      </div>


                                      <div className="tab-pane" id="tab3">
                                        <br/>
                                        <br/>
                                        <SummaryDetail />
                                      </div>





                                      <div className="tab-pane" id="tab4">
                                          <br/>
                                          <br/>
                                          <h1 className="text-center text-success"><strong><i className="fa fa-check fa-lg"></i> Complete</strong></h1>
                                          <h4 className="text-center">Click next to finish</h4>
                                          <br/>
                                          <br/>
                                          <div className="form-actions">
                                              <div className="row">
                                                  <div className="col-sm-12">
                                                      <ul className="pager wizard no-margin">
                                                          <li className="previous">
                                                              <Button type="button" className="btn btn-lg btn-default"> Previous </Button>
                                                          </li>
                                                          <li className="next disabled">
                                                              <Button type="button" className="btn btn-lg txt-color-darken"> Next </Button>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                                
                            </div>

                        </div>

                  </div>

              </article>
            </div>    
          </div>
        </div>
      </div>
    )
  }    
}

export default ApplyTabs;