import React from 'react';
import { Accordion, Panel } from "react-bootstrap";
import ContactForm from './contactForm';

const ContactCon = () => (
	<div className="contact-us padding-40 clearfix">
      	<div className="container">
	        <div className="row">
	          	<div className="col-md-6 col-sm-6 col-xs-12">
					<Accordion>
						<Panel bsStyle="primary" header="1. What are the modes of payment for paying for RTI on OnlineRTI?" eventKey="1">
							<span className="italic-font">1. Credit Cards (Visa, Mastercard, Diners Club)<br/>2. Debit Cards (Visa, Mastercard, Maestro, RuPay)<br/>3. Netbanking (we support all major banks in India)<br/>4. PayTM Wallet</span>
						</Panel>
						<Panel bsStyle="primary" header="2. Can I apply RTI to private bodies?" eventKey="2">
							<span className="italic-font">RTI is not applicable to private bodies. However if the information that you are looking for is available with any govt body then you can apply. If our experts conclude that your RTI application cannot be filed we will offer full refund.</span>
						</Panel>
						<Panel bsStyle="primary" header="3. Do you handle only Bangalore related RTIs or other cities as well?" eventKey="3">
							<span className="italic-font">Our head office is in Bangalore but we accept and handle RTIs for any govt in India.</span>
						</Panel>
						<Panel bsStyle="primary" header="4. Is this a private organization?" eventKey="4">
							<span className="italic-font">OnlineRTI.com is a product of GetupForChange services Pvt Ltd. This is a private organization and our vision is "To promote transparency and good governance by making RTI simple, accessible and effective"</span>
						</Panel>
						<Panel bsStyle="primary" header="5. I have paid for my RTI. What next?" eventKey="5">
							<span className="italic-font">Sit back and relax! We will share the RTI id via E-mail/SMS. Our RTI experts will have a look at your application and if they need any information they will contact you via email or call you. Once the experts have drafted your application we send a copy to you for your approval. At this stage you can modify your application if you want otherwise you can just approve by signing your application via electronic signature or manual signature. At any stage you can then track logging into your OnlineRTI Account.</span>
						</Panel>
						<Panel bsStyle="primary" header="6. Do I have to register to apply for RTI?" eventKey="6">
							<span className="italic-font">No, you are not required to register at OnlineRTI.com. You can apply RTI without registration using "Continue as Guest" option. However we suggest you to create an account with us. It easier to track RTI if you create an account.</span>
						</Panel>
						<Panel bsStyle="primary" header="7. Are there any registration charges for creating account in OnlineRTI?" eventKey="7">
							<span className="italic-font">There are no registration charges applicable for creating an account with us. It is absolutely free of cost.</span>
						</Panel>
						<Panel bsStyle="primary" header="8. Can I apply RTI to private bodies?" eventKey="8">
							<span className="italic-font">RTI is not applicable to private bodies. However if the information that you are looking for is available with any govt body then you can apply. If our experts conclude that your RTI application cannot be filed we will offer full refund.</span>
						</Panel>
						<Panel bsStyle="primary" header="9. Do you handle only Bangalore related RTIs or other cities as well?" eventKey="9">
							<span className="italic-font">Our head office is in Bangalore but we accept and handle RTIs for any govt in India.</span>
						</Panel>
						<Panel bsStyle="primary" header="10. Is this a private organization?" eventKey="10">
							<span className="italic-font">OnlineRTI.com is a product of GetupForChange services Pvt Ltd. This is a private organization and our vision is "To promote transparency and good governance by making RTI simple, accessible and effective"</span>
						</Panel>
					</Accordion>
	          	</div>
	          	<div className="col-md-6 col-sm-6 col-xs-12">
	          		<ContactForm/>
	          	</div>
	        </div>
      	</div>
    </div>
);

export default ContactCon;