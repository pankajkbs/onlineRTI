import React from 'react';
import { Accordion, Panel } from "react-bootstrap";
import GirlIcon from '../../assets/images/rti-girl.png';
import Http from '../../lib/Http';

class HelpFaqs extends React.Component {
	constructor() {
	  super();
	  this.state = {
	    faqs: []
	  }
	}
	componentDidMount() {
	  Http.get('list-faqs')
	  .then(({data}) => this.setState({faqs: data}))
	  .catch(error => console.log(error));
	}
	render() {
	    let faqData = this.state.faqs;
	    return (
			<div className="frequently-ask-question clearfix">
				<div className="rti-girl">
					<img src={GirlIcon} alt="GirlIcon"/>
				</div>
				<div className="rti-panel padding-top50 padding-sm-50">
					<div className="main-head-black">Frequently ask Question</div>
					<div className="padding-top50"></div>
					<Accordion>
	    		        {faqData ? (
	    		        		faqData.map((value, index) => {
	            					return (
	            						<Panel key={index} bsStyle="primary" header={value.title} eventKey={index}>
									    	<span className="italic-font">{value.content}</span>
									    </Panel>
	            					);
	            				})
	    		        	) : (
	    		        		<div>Loading ... </div>
	    		        	)
	    		        }
					  </Accordion>
				</div>
			</div>
		);
	}	
};
export default HelpFaqs;