import React, {Component} from 'react';
import {Form} from "react-bootstrap";
import {Button} from 'react-bootstrap';
import { reduxForm } from 'redux-form';

class SaveAndContinue extends Component {
	render() {
		const { previousPage, handleSubmit, invalid, submitting} = this.props;
		return(
			<div>
			<Form onSubmit={handleSubmit} className="box-success">
				<h2 className="text-center text-success">
				Your application has been completed.
				</h2> <br/>
				<h3 className="text-center">Click next to finish</h3>
				<br/>
				<br/>
				<div className="form-actions">
					<div className="row">
						<div className="col-sm-12">
							<ul className="pager wizard no-margin">
								<li className="previous">
									<Button type="button" onClick={previousPage} className="btn btn-info btn-block italic-font btn btn-primary "> Previous </Button>
								</li>
								<li> &nbsp; &nbsp;</li>
								<li className="next disabled">
									<Button type="submit" disabled={invalid || submitting} className="btn btn-info btn-block italic-font btn btn-primary"> Next </Button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Form>
			
			</div>
		);
	}

}

export default reduxForm({
  form: 'rti_form', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(SaveAndContinue)