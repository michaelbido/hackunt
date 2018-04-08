import React, { Component } from 'react';

import '../css/ViewForm.css';

import firebase from '../firebase';

class SingleForm extends Component {
    
    render () {
        return (
            <div className="singleItem">
                <h1>{this.props.userdata.username}</h1>
                <p>EUID: {this.props.userdata.euid}</p>
                <h3>Attended all classes: {this.props.userdata.allClasses}</h3>
                <p>If not, the reason is: {this.props.userdata.classesWhy}</p>
                <h3>Attended all classes: {this.props.userdata.allSessions}</h3>
                <p>If not, the reason is: {this.props.userdata.sessionsWhy}</p>
                <h3>Met professor during pay period: {this.props.userdata.meetProf}</h3>
                <h3>Observed another SI leader: {this.props.userdata.observe}</h3>
                <h3>Number of Students in SI session for the week:</h3>
                <p>Monday: {this.props.userdata.mon}</p>
                <p>Tuesday: {this.props.userdata.tues}</p>
                <p>Wednesday: {this.props.userdata.wed}</p>
                <p>Thursday: {this.props.userdata.thrus}</p>
                <p>Friday: {this.props.userdata.fri}</p>
                <h3>Response to '{this.props.userdata.custom}':</h3>
                <p>{this.props.userdata.customInput}</p>
            </div>
        )
    }
}

class AllForms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date:'04_08_2018',
            didMount: false,
            data: null
        }
    }

    componentWillMount() {
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
        today = mm + '_' + dd + '_' + yyyy;

        const db = firebase.database().ref('/records');
        var results = [];
        db.once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                var childKey = childSnapshot.key;
                // console.log(childKey + "==?" + today);
                //console.log(childSnapshot.val());
                var childData = childSnapshot.val();
                var childKey = Object.keys(childData);
                // console.log(today);
                // console.log(childKey);
                if (childKey[childKey.length - 1] === today) {
                    results.push(childData[today]);
                }
                // console.log(results);
            });

            this.setState({
                date: today,
                didMount: true,
                data: results
            });

            console.log(results);
        });
    }

    render() {

        if (!this.state.didMount) {
            return (
                <p>Loading the Forms :)</p>
            );
        }

        return (
            <div>
                {this.state.data.map( (person) => {
                    return <SingleForm userdata={person} />
                })}
            </div>
        );
    }
}

class ViewFormPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wow: "yes"
        }
    }

    render() {
        return (
            <div className='ViewForm'>
                <h1>View Today's Forms:</h1>
                <AllForms />
            </div>
        );
    }
}

export default ViewFormPage;