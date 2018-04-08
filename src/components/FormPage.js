import React, { Component } from 'react';
import '../css/Page.css';

import firebase from '../firebase';


class FormPage extends Component {

    constructor () {
        super();
        this.state = {
            custom: 'Any additional comments?',
            euid: '',
            username: '',
            allClasses: 'no',
            classesWhy: '',
            allSessions: 'no',
            sessionsWhy: '',
            meetProf: 'no',
            observe: 'no',
            mon: 0,
            tues: 0,
            wed: 0,
            thurs: 0,
            fri: 0,
            customInput: ''
        };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.submitData = this.submitData.bind(this);
    }

    submitData(event) {
      event.preventDefault();
      console.log(this.state);
      // get date
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      if (dd < 10) {
          dd = '0' + dd;
      } 
      if (mm < 10) {
          mm = '0' + mm;
      } 
      today = mm + '-' + dd + '-' + yyyy;

      const db = firebase.database().ref('records/' + this.state.euid + '/' + today);
      db.set(this.state);
      // const 
      alert('Your response has been submitted.');
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'radio' ? target.value : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    render() {
      return (
        <div className="FormPage">
          <form className="FormPage__form">
            <section className="FormPage__form__item">
              <h1>Enter your full name:</h1>
              <textarea name="username" rows="1" cols="40" maxLength="50" onChange={this.handleInputChange}></textarea>
            </section>
            <section className="FormPage__form__item">
              <h1>Enter your EUID:</h1>
              <textarea name="euid" rows="1" cols="40" maxLength="30" onChange={this.handleInputChange}></textarea>
            </section>
            <section className="FormPage__form__item">
              <h1>Did you attend all of the classes?</h1>
              <label>
                <input type="radio" value="yes" name="allClasses" onChange={this.handleInputChange} />
                Yes
              </label>
              <label>
                <input type="radio" value="no" name="allClasses" onChange={this.handleInputChange}/>
                No
              </label>
              <p>If no, explain why:</p>
              <textarea name="classesWhy" rows="7" cols="62" maxLength="400" onChange={this.handleInputChange}></textarea>
            </section>
            <section className="FormPage__form__item">
              <h1>Did you attend all of the sessions?</h1>
              <label>
                <input type="radio" value="yes" name="allSessions" onChange={this.handleInputChange}/>
                Yes
              </label>
              <label>
                <input type="radio" value="no" name="allSessions" onChange={this.handleInputChange}/>
                No
              </label>
              <p>If no, explain why:</p>
              <textarea name="sessionsWhy" rows="7" cols="62" maxLength="400" onChange={this.handleInputChange}></textarea>
            </section>
            <section className="FormPage__form__item">
              <h1>Did you meet with your professor this pay period?</h1>
              <label>
                <input type="radio" value="yes" name="meetProf" onChange={this.handleInputChange}/>
                Yes
              </label>
              <label>
                <input type="radio" value="no" name="meetProf" onChange={this.handleInputChange}/>
                No
              </label>
            </section>
            <section className="FormPage__form__item">
              <h1>Did you observe another SI leader?</h1>
              <label>
                <input type="radio" value="yes" name="observe" onChange={this.handleInputChange}/>
                Yes
              </label>
              <label>
                <input type="radio" value="no" name="observe" onChange={this.handleInputChange}/>
                No
              </label>
            </section>
            <section className="FormPage__form__item">
              <h1>How many students did you have in your SI session?</h1>
              <div className="FormPage__form__item__table">
                <label>
                  <input type="text" name="mon" onChange={this.handleInputChange}/>
                  on Monday 
                </label>
                <label>
                  <input type="text" name="tues" onChange={this.handleInputChange}/>
                  on Tuesday
                </label>
                <label>
                  <input type="text" name="wed" onChange={this.handleInputChange}/>
                  on Wednesday 
                </label>
                <label>
                  <input type="text" name="thurs" onChange={this.handleInputChange}/>
                  on Thrusday
                </label>
                <label>
                  <input type="text" name="fri" onChange={this.handleInputChange}/>
                  on Friday
                </label>
              </div>
            </section>
            <section className="FormPage__form__item">
              <h1>{this.state.custom}</h1>
              <textarea name="customInput" rows="7" cols="62" maxlength="400" onChange={this.handleInputChange}></textarea>
            </section>
            <input type="submit" value="Submit" className="FormPage__submit" onClick={this.submitData} />
          </form>
        </div>
      )
    }
}

export default FormPage;