/* global IMAGE_PATH */
import React from 'react';
import Http from '../../lib/Http';

class HomeAbout extends React.Component {
    constructor() {
      super();
      this.state = {
        benefits: []
      }
    }
    componentDidMount() {
      Http.get('our-benefits')
      .then(({data}) => this.setState({benefits: data}))
      .catch(error => console.log(error));
    }
    render() {
        let benefits = this.state.benefits;
        return (
        	<div className="online-RTI padding-40 clearfix">
        		<div className="container">
        			<div className="main-head">What is Online RTI ?</div>
        			<div className="row padding-top50">
        				{benefits ? 
        					(
        				        benefits.map((value, index) => {
        				            return (
        				                <div className="col-sm-4 online-RTI-section" key={index}>
        				                    <img className="online-rti-icon" src={IMAGE_PATH + value.image} alt={value.title} />
        				                    <a className="online-rti-heading">{value.title}</a>
        				                    <p className="italic-font online-rti-para">{value.shortDesc}</p>
        				                </div>
        				            );
        				        })
        				    ) : (
        				        <div>Loading ... </div>
        				    )
        				}
        			</div>
        		</div>
        	</div>
        );
    }
}

export default HomeAbout;