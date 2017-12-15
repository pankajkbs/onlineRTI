import React, { Component } from "react";
import PropTypes from 'prop-types';
import { FormGroup, Button } from "react-bootstrap";

// Form submit component
export default class FormSubmit extends Component {
  // render
  render() {
    const {invalid, submitting, buttonSaveLoading, buttonSave, className} = this.props;
    return (

        <FormGroup>
          <Button type="submit" bsStyle="primary" className={className} disabled={invalid || submitting}>
            {submitting ?
              (buttonSaveLoading ? buttonSaveLoading : 'Submitting...') :
              (buttonSave ? buttonSave : 'Submit')}
          </Button>
        </FormGroup>
    );
  }
}

// prop checks
FormSubmit.propTypes = {
  error: PropTypes.string,  // redux-form general `_error` message
  invalid: PropTypes.bool,  // redux-form invalid prop
  submitting: PropTypes.bool,   // redux-form invalid submitting
  buttonSaveLoading: PropTypes.string, // save button loading text, default is "Submitting..."
  buttonSave: PropTypes.string,    // save button text, default is "Save"
};
