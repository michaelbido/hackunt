import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

import '../css/NavBar.css';

class NavBar extends Component {

    render() {
        return (
            <div className="NavBar">
                <img src={require('../images/untlogo.png')}/>
                <h1> UNT Focus Group</h1>
                <div className="buttons">
                    <button><Link to={routes.FORM}>New Focus Group From</Link></button >
                    <button><Link to={routes.VIEW_FORM}>View All Forms</Link></button >
                    <button><Link to={routes.CUSTOM_FORM}>Customize Focus Form</Link></button >
                    <button><Link to={routes.LEADER_STATS}>SI Statistics Form</Link></button >
                    <button><Link to={routes.CALENDAR}>Calendar of Forms</Link></button >
                    <button><Link to={routes.SEARCH}>Search</Link></button >
                </div>
            </div>
        )
    }
}

export default NavBar;