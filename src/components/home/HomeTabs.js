/* global IMAGE_PATH, _ */
import React from 'react';
import Http from '../../lib/Http';
import {connect} from 'react-redux';
import { SHOW_LOGIN_POPUP } from '../../constant';
import { push } from 'react-router-redux';

class HomeTabs extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: []
        };
    }
    componentDidMount() {
        Http.get('list-categories')
        .then(({data}) => this.setState({categories: data}))
        .catch(errors => console.log(errors));
    }
    checkState(value) {
        const {token, dispatch} = this.props;
        if( token ) {
            dispatch(push(`/apply/${value.slug}`));
        } else {
            this.props.dispatch({
                type: SHOW_LOGIN_POPUP,
                displayLoginPopup: true
            });
        }
    }
    render() {
        let categories = this.state.categories;
        if( !_.isEmpty(categories) ){
            return (
                <div className="RTI-policy clearfix">
                    <ul className="clearfix">
                        {categories.map((value, index) => {
                            return (
                                <li key={index}>
                                    <a onClick={() => this.checkState(value)}>
                                        <img src={IMAGE_PATH + value.image} alt={value.title}/>
                                        <span>{value.title}</span>
                                    </a>
                                </li>
                            );
                        }) }
                    </ul>
                </div>
            );
        } else {
            return null;
        }    
    }
}    
const mapStateToProps = (state) => ({
    token: state.auth.token
});

export default connect(mapStateToProps)(HomeTabs);