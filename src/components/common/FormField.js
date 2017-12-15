import React, { Component } from "react";
import PropTypes from 'prop-types';
import { FormGroup, FormControl, HelpBlock, Col, ControlLabel } from "react-bootstrap";

// Form field component
export default class FormField extends Component {
  // render
  render() {
    const {doValidate, col, meta, doValidateWithStackedForm, formGroupClassName} = this.props;
    if (doValidate) {
      return (
        <Col sm={col}>{this.content()}</Col>
      );
    } else if (doValidateWithStackedForm) {
      return (
        <FormGroup className={formGroupClassName}
          validationState={!meta.touched ? null : (meta.error ? 'error' : null)}>
          {this.content()}
          {/*<FormControl.Feedback/>*/}
          <HelpBlock>
            {meta.touched && meta.error ? meta.error : null}
          </HelpBlock>
        </FormGroup>
      );
    } else {
      return (
        <FormGroup >
          {this.content()}
        </FormGroup>
      );
    }
  }

  // the field content
  content() {
    const {theme, label, meta} = this.props;
    if ('custom' === theme) {
      return (
        <div>
        <ControlLabel>{label}</ControlLabel>
        {this.field()}
        </div>
      );  
    } else {
      
      // default theme: 2col
      return (
          
          <FormGroup 
            validationState={!meta.touched ? null : (meta.error ? 'error' : null)}>
            
            {this.field()}
            {/*<FormControl.Feedback/>*/}
            <HelpBlock>
              {meta.touched && meta.error ? meta.error : null}
            </HelpBlock>
          </FormGroup>
      );
    }
  }

  // the field itself
  field() {
    const {input, componentClass, type, placeholder, children, className, disabled} = this.props;
    return (
      <FormControl {...input} disabled={disabled} componentClass={componentClass} type={type} placeholder={placeholder} className={className}>
        {children}
      </FormControl>
    );
  }
}

// prop checks
FormField.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
  theme: PropTypes.string,  // 2col (default), etc
  doValidate: PropTypes.bool, // true or false
  label: PropTypes.any,  // the field text or a react component if we have html inside (empty string by default)
  componentClass: PropTypes.string, // input (by default), textarea, select
  type: PropTypes.string,   // input type: text (by default), password
  placeholder: PropTypes.string,    // input placeholder (empty string by default)
  className: PropTypes.string,  // the class name (empty string by default)
}
