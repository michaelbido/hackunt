import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

import '../css/NavBar.css';

class NavBar extends Component {

    render() {
        return (
            <div className="navbar">
                <img src={require('../images/untlogo.png')}/>
                <h1> UNT Focus Group</h1>
                <div className="buttons">
                    <button><Link to={routes.HOME}>Home</Link></button >
                    <button><Link to={routes.FORM}>New Focus Group Entry</Link></button >
                    <button><Link to={routes.VIEW_FORM}>View All Forms</Link></button >
                    <button><Link to={routes.CUSTOM_FORM}>Customize Form</Link></button >
                    <button><Link to={routes.LEADER_STATS}>SI Statistics</Link></button >
                    <button><Link to={routes.CALENDAR}>Calendar</Link></button >
                    <button><Link to={routes.SEARCH}>Search</Link></button >
                </div>
            </div>
        )
    }
}

export default NavBar;