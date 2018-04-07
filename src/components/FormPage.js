import React, { Component } from 'react';
import '../css/Page.css';



class FormPage extends Component {

    constructor () {
        super();
        this.state = {
            custom: 'Any additional comments?',
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
    }

    render() {
      return (
        <div className="FormPage">
          <form className="FormPage__form">
            <section className="FormPage__form__item">
              <h1>Did you attend all of the classes?</h1>
              <label>
                <input type="radio" value="yes" name="allClasses"/>
                Yes
              </label>
              <label>
                <input type="radio" value="no" name="allClasses"/>
                No
              </label>
              <p>If no, explain why:</p>
              <textarea name="classesWhy" rows="7" cols="62" maxlength="400"></textarea>
            </section>
            <section className="FormPage__form__item">
              <h1>Did you attend all of the sessions?</h1>
              <label>
                <input type="radio" value="yes" name="allSessions"/>
                Yes
              </label>
              <label>
                <input type="radio" value="no" name="allSessions"/>
                No
              </label>
              <p>If no, explain why:</p>
              <textarea name="sessionsWhy" rows="7" cols="62" maxlength="400"></textarea>
            </section>
            <section className="FormPage__form__item">
              <h1>Did you meet with your professor this pay period?</h1>
              <label>
                <input type="radio" value="yes" name="meetProf"/>
                Yes
              </label>
              <label>
                <input type="radio" value="no" name="meetProf"/>
                No
              </label>
            </section>
            <section className="FormPage__form__item">
              <h1>Did you observe another SI leader?</h1>
              <label>
                <input type="radio" value="yes" name="observe"/>
                Yes
              </label>
              <label>
                <input type="radio" value="no" name="observe"/>
                No
              </label>
            </section>
            <section className="FormPage__form__item">
              <h1>How many students did you have in your SI session?</h1>
              <div className="FormPage__form__item__table">
                <label>
                  <input type="text" name="mon"/>
                  on Monday 
                </label>
                <label>
                  <input type="text" name="tues"/>
                  on Tuesday
                </label>
                <label>
                  <input type="text" name="wed"/>
                  on Wednesday 
                </label>
                <label>
                  <input type="text" name="thurs"/>
                  on Thrusday
                </label>
                <label>
                  <input type="text" name="fri"/>
                  on Friday
                </label>
              </div>
            </section>
            <section className="FormPage__form__item">
              <h1>{this.state.custom}</h1>
              <textarea name="customInput" rows="7" cols="62" maxlength="400"></textarea>
            </section>
            <input type="submit" value="Submit" className="FormPage__submit" />
          </form>
        </div>
      )
    }
}

export default FormPage;