import React, { Component } from 'react';
import './Pricing.css';
import { Accordion, Panel } from "react-bootstrap";
import Yes from '../../assets/images/check.png';
import No from '../../assets/images/cross-road.png';
import Http from '../../lib/Http';
import {Loader} from '../common/Loader';
import { Tooltip , OverlayTrigger} from 'react-bootstrap';

const tooltipYes = (
  <Tooltip id="tooltip">Applicable</Tooltip>
);

const tooltipNo = (
  <Tooltip id="tooltip1">Not Applicable</Tooltip>
);

const processingCharges = (
  <Tooltip id="processingChargesID">Processing includes printing,covering and attaching payment fees for application using IPO/Court Fee Stamp/DD according to government requirements

</Tooltip>
);

const shippingCharges = (
  <Tooltip id="shippingChargesID"> 
   Within 24 hours of your approval, we ship or deliver your RTI using speed post or online options to the concerned government office

</Tooltip>
);

const RTIDraftingCharges = (
  <Tooltip id="RTIDraftingChargesID"> 
  We draft your RTI application after understanding local laws, related judgments and legal language. This makes your case strong so that you get answers to your questions
</Tooltip>
);

const PhonefromRTIExpert = (
  <Tooltip id="RTIDraftingChargesID"> 
 Our RTI Expert calls you to understand your problem completely. After getting all information about your case, RTI Expert prepares a powerful RTI so that you get the information you want
 </Tooltip>
);


class Pricing extends Component {
	constructor() {
	  super();
	  this.state = {
	    faqs: [],
	    isLoading: false
	  }
	}
	componentDidMount() {
		this.setState({isLoading: true});
	  	Http.get('list-faqs')
	  	.then(({data}) => this.setState({faqs: data, isLoading: false}))
	  	.catch(error => console.log(error));
	}
    render() {
    	const {faqs, isLoading} = this.state;
        return (
            <div className="container padding-40">
        		{/*<div className="text-center">
        			<div className="fillingCahrge">
        				<span>Calculate RTI filing charges for</span>
        				<select className="locationDrop form-control">
        				  <option>Center</option>
        				  <option>Delhi</option>
        				  <option>Delhi</option>
        				  <option>Delhi</option>
        				  <option>Delhi</option>
        				</select>
        			</div>
        		</div>*/}
        		<div className="row">
        			<div className="col-sm-6">
        				<h3 className="blocktitle pricing">What we do for you?</h3>
        			    <ul className="block-list">
        			    	<li><h5 className="blocktitle">Qualified RTI Expert understands your problem and drafts your RTI</h5></li>
        			    	<li><h5 className="blocktitle">We identify exact office and pay government fees using recommended mode of payment</h5></li>
        			    	<li><h5 className="blocktitle">We send your RTI using speedpost/registeredpost/online options with all necessary attachments</h5></li>
        			    	<li><h5 className="blocktitle">We send timely updates on the status of your RTI by SMS/Email</h5></li>
        			    	<li><h5 className="blocktitle">Excellent Support is available to answer your application related questions </h5></li>
        			    </ul>
        			</div>

        			<div className="col-sm-6">
                       <h3 className="blocktitle pricing">Your fee breakup</h3>
                       <table className="table table-bordered pricetable">
                          <tbody>
                             <tr className="head1"></tr>
                             <tr>
                                <td>
                                   <div className="tablerow nd-pricinginfo tooltipstered">
                                      <div className="floatLeft">
                                         <p className="inline">Processing Charges</p>
                                      </div>
                                      <div className="floatRight hidden-phone">
                                         <p className="inline"><b>₹ 49</b></p>

                                         <OverlayTrigger placement="left" overlay={processingCharges} >
                                            <div className="infoBubble inline">?</div>
                                        </OverlayTrigger>

                                         

                                      </div>
                                   </div>
                                </td>
                                <td className="price0">
                                   <div className="tablerow clickzero">
                                      <OverlayTrigger placement="top" overlay={tooltipYes} >
                                        <img src={Yes} alt="yes" className="planimg inline" />
                                    </OverlayTrigger>
                                   </div>
                                </td>
                                <td className="price1">
                                   <div className="tablerow clickno">
                                    <OverlayTrigger placement="top" overlay={tooltipYes} >
                                        <img src={Yes} className="planimg inline" alt="yes" />
                                   </OverlayTrigger>
                                   </div>
                                </td>
                                <td className="price2">
                                   <div className="tablerow clickyes">
                                    <OverlayTrigger placement="top" overlay={tooltipYes} >
                                        <img src={Yes} className="planimg inline" alt="yes" />
                                   </OverlayTrigger>
                                   </div>
                                </td>
                             </tr>
                             <tr>
                                <td>
                                   <div className="tablerow nd-pricinginfo tooltipstered">
                                      <div className="floatLeft">
                                         <p className="inline">Shipping Charges</p>
                                      </div>
                                      <div className="floatRight hidden-phone">
                                         <p className="inline"><b>₹ 100</b></p>
                                         <OverlayTrigger placement="left" overlay={shippingCharges} >
                                            <div className="infoBubble inline">?</div>
                                        </OverlayTrigger>
                                      </div>
                                   </div>
                                </td>
                                <td className="price0">
                                   <div className="tablerow clickzero">
                                    <OverlayTrigger placement="top" overlay={tooltipYes} >
                                        <img src={Yes} className="planimg inline" alt="yes" />
                                   </OverlayTrigger>
                                   </div>
                                </td>
                                <td className="price1">
                                   <div className="tablerow clickno">
                                   <OverlayTrigger placement="top" overlay={tooltipYes} >
                                        <img src={Yes} className="planimg inline" alt="yes" />
                                   </OverlayTrigger>
                                   </div>
                                </td>
                                <td className="price2">
                                   <div className="tablerow clickyes">
                                    <OverlayTrigger placement="top" overlay={tooltipYes} >
                                        <img src={Yes} className="planimg inline" alt="yes" />
                                   </OverlayTrigger>

                                   </div>
                                </td>
                             </tr>
                             <tr>
                                <td>
                                   <div className="tablerow nd-pricinginfo tooltipstered">
                                      <div className="floatLeft">
                                         <p className="inline">RTI Drafting Charges</p>
                                      </div>
                                      <div className="floatRight hidden-phone">
                                         <p className="inline"><b>₹ 100</b></p>
                                          <OverlayTrigger placement="left" overlay={RTIDraftingCharges} >
                                            <div className="infoBubble inline">?</div>
                                        </OverlayTrigger>
                                      </div>
                                   </div>
                                </td>
                                <td className="price0">
                                   <div className="tablerow clickzero">
                                   <OverlayTrigger placement="top" overlay={tooltipNo} >
                                        <img src={No} className="planimg inline" alt="" />
                                    </OverlayTrigger>
                                   </div>
                                </td>
                                <td className="price1">
                                   <div className="tablerow clickno">
                                   <OverlayTrigger placement="top" overlay={tooltipYes} >
                                        <img src={Yes} className="planimg inline" alt="yes" />
                                    </OverlayTrigger>
                                   </div>
                                </td>
                                <td className="price2">
                                   <div className="tablerow clickyes">
                                    <OverlayTrigger placement="top" overlay={tooltipYes} >
                                        <img src={Yes} className="planimg inline" alt="yes" />
                                   </OverlayTrigger>
                                   </div>
                                </td>
                             </tr>
                             <tr className="finalRow">
                                <td>
                                   <div className="tablerow nd-pricinginfo tooltipstered">
                                      <div className="floatLeft">
                                         <p className="inline">Phone from RTI Expert</p>
                                      </div>
                                      <div className="floatRight hidden-phone">
                                         <p className="inline"><b>₹ 150</b></p>
                                         <OverlayTrigger placement="left" overlay={PhonefromRTIExpert} >
                                            <div className="infoBubble inline">?</div>
                                        </OverlayTrigger>
                                      </div>
                                   </div>
                                </td>
                                <td className="price0">
                                   <div className="tablerow clickzero">

                                    <OverlayTrigger placement="top" overlay={tooltipNo} >
                                        <img src={No} className="planimg inline" alt="" />
                                    </OverlayTrigger>

                                   </div>
                                </td>
                                <td className="price1">
                                   <div className="tablerow clickno">
                                    <OverlayTrigger placement="top" overlay={tooltipYes} >
                                    <img src={Yes} className="planimg inline" alt="yes" />
                                   </OverlayTrigger>
                                   </div>
                                </td>
                                <td className="price2">
                                   <div className="tablerow clickyes">
                                    <OverlayTrigger placement="top" overlay={tooltipYes} >
                                    <img src={Yes} className="planimg inline" alt="yes" />
                                   </OverlayTrigger>
                                   </div>
                                </td>
                             </tr>
                             <tr className="lastrow">
                                <td>
                                   <div className="tablerow">
                                      <div className="floatRight">
                                         <h2 className="margin_right15 planselect">Total</h2>
                                      </div>
                                   </div>
                                </td>
                                <td className="price0">
                                   <div className="tablerow">
                                      <p className="inline"><b>₹ 149 </b></p>
                                   </div>
                                </td>
                                <td className="price1">
                                   <div className="tablerow">
                                      <p className="inline"><b>₹ 249</b></p>
                                   </div>
                                </td>
                                <td className="price2">
                                   <div className="tablerow">
                                      <p className="inline"><b>₹ 399</b> </p>
                                   </div>
                                </td>
                             </tr>
                          </tbody>
                       </table>
                    </div>
        		</div>
            	<div className="faq padding-40 clearfix">
                  	<div className="container">
                    	<div className="main-head-black-mid">FAQ</div>
                    	<div className="padding-top50"></div>
						<Accordion>
		    		        {isLoading
		    		        	? <Loader/>
		    		        	: faqs.length > 0 ? (
		    		        		faqs.map((value, index) => {
		            					return (
		            						<Panel key={index} bsStyle="primary" header={value.title} eventKey={index}>
										    	<span className="italic-font">{value.content}</span>
										    </Panel>
		            					);
		            				})
		    		        	) : (
		    		        		null
		    		        	)
		    		        }
						</Accordion>
                  	</div>
                </div>
            </div>
        );
    }
}

export default Pricing
