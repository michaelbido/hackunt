import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';
import * as routes from './constants/routes';

import CalendarPage from './components/CalendarPage';
import CustomFormPage from './components/CustomFormPage';
import FormPage from './components/FormPage';
import LeaderStatsPage from './components/LeaderStatsPage';
import NavBarPage from './components/NavBar';
import SearchPage from './components/SearchPage';
import ViewFormPage from './components/ViewFormPage';
import HomePage from './components/HomePage';


class App extends Component {
constructor(props) {
  super(props);
  this.state = {

  }
}

  render() {
    return (
      <div className="App">
        
        <Router>
          <div>
            <NavBarPage />
            <Route exact path={routes.HOME} component={() => <HomePage />} />
            <Route exact path={routes.FORM} component={() => <FormPage />} />
            <Route exact path={routes.VIEW_FORM} component={() => <ViewFormPage />} />
            <Route exact path={routes.CUSTOM_FORM} component={() => <CustomFormPage />} />
            <Route exact path={routes.LEADER_STATS} component={() => <LeaderStatsPage />} />
            <Route exact path={routes.CALENDAR} component={() => <CalendarPage />} />
            <Route exact path={routes.SEARCH} component={() => <SearchPage />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
