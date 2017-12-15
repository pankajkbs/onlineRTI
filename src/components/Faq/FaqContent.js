import React from 'react';
import { Accordion, Panel } from "react-bootstrap";

const FaqCon = () => (
    <div className="faq padding-40 clearfix">
      <div className="container">
        <div className="main-head-black-mid">What is RTI ?</div>
        <div className="padding-top50"></div>
          <Accordion>
          <Panel bsStyle="primary" header="1. What is RTI ?" eventKey="1">
            <span className="italic-font">Every citizen has a right to know how the Government is functioning. Right to Information empowers every citizen to seek any information from the Government.</span>
          </Panel>
          <Panel bsStyle="primary" header="2. What information can be asked using RTI ?" eventKey="2">
            <span className="italic-font">1. Get copies of answer sheet from any exam conducting board (Eg: GATE, IIM, UPSC etc)<br />2. Status of passport, driving license, ration card, aadhar card applications<br />3. PF withdrawl and transfer status<br />4. Pension and IT refund status<br />5. To know whether a college or course is UGC Approved or not<br />6. MP/MLA fund usage and Gram Panchayat expenditure details</span>
          </Panel>
          <Panel bsStyle="primary" header="3. What is OnlineRTI ?" eventKey="3">
            <span className="italic-font">OnlineRTI is a service for filing RTI application. We draft your application as per the rules, find the correct PIO address, pay the fees using IPO or Demand Draft and send the application using speed post.</span>
          </Panel>
          <Panel bsStyle="primary" header="4. How do I know you filed my RTI application?" eventKey="4">
            <span className="italic-font">You will receive registered post tracking link along with the soft copy of your application. As your application goes through different stages in our drafting process, you will be notified of the progress.</span>
          </Panel>
          <Panel bsStyle="primary" header="5. How does OnlineRTI work ?" eventKey="5">
            <span className="italic-font">After you file the application and pay the fees, our experts will draft the application as per RTI rules and file the application on your behalf. You will get the information by post from the concerned authority within 30 days.</span>
          </Panel>
          <Panel bsStyle="primary" header="6. Can you guarantee I will receive my information ?" eventKey="6">
            <span className="italic-font">RTI act guarantees that the PIO should respond to an application within 30 days. However in some cases, users never get the information sought. In scenarios where the information was not provided you can file for first appeal.</span>
          </Panel>
        </Accordion>
      </div>
    </div>
);

export default FaqCon;