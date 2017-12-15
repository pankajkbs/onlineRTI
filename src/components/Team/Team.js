/* global IMAGE_PATH */
//https://blackrockdigital.github.io/startbootstrap-round-about/
import React, { Component } from 'react';
import Http from '../../lib/Http';
import {Loader} from '../common/Loader';
import ScrollToTopOnMount from '../common/ScrollToTopOnMount';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	team: []
        }
    }
    componentDidMount() {
    	Http.get('get-team')
    	.then(({data}) => this.setState({team: data}))
    	.catch(error => console.log(error));
    }
    render() {
    	const {team} = this.state;
        return (
        	<div>
	            <div>
					<div className="track-banner"><h2>Our Team</h2></div>
				</div>
				<div className="about-us-rti padding-40 clearfix">
				    <div className="container">
						<div className="row">
							{team.length > 0 
								? team.map((value, index) => {
									return (
										<div key={index}>	
											<div className="col-lg-12">
												<h2 className="my-4">{value._id}</h2>
											</div>
											{value.members.map((val, ind) => {
												return (
													<div className="col-lg-4 col-sm-6 text-center mb-4" key={ind}>
														<div className="teams">
															<img className="rounded-circle img-fluid d-block mx-auto" src={IMAGE_PATH + val.picture} alt={val.name}/>
															<h3>{val.name} <small>{value._id}</small> </h3>
															<p>{val.bio}</p>
														</div>
													</div>
												)
											})}
										</div>		
									)
								}) 
								
								: <div><ScrollToTopOnMount/><Loader/></div>
							}	
						</div>
				    </div>
				</div>    
			</div>	
        );
    }
}

export default Team
