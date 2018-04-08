import React, { Component } from 'react';
import { LineChart, BarChart } from 'react-easy-chart';

import '../css/LeaderStats.css';

import firebase from '../firebase';

class UserData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            avgMon: 0,
            avgTues: 0,
            avgWed: 0,
            avgThurs: 0,
            avgFri: 0,
            thingsDid: null,
            numStudents: null,
            displayGraph: false
        }
        this.generateGraphs = this.generateGraphs.bind(this);
        //alert(this.state.data);
    }

    componentWillReceiveProps(newProps) {
        //console.log(newProps);
        var index = Object.keys(newProps)[0]
        var newObj = newProps[index];
        var thingsDid = [];
        var numStudents = [];
        var weeks = 0.0;
        var m = 0.0;
        var t = 0.0;
        var w = 0.0;
        var tr = 0.0;
        var f = 0.0;

        for (var key in newObj) {
            var dateObj = newObj[key];
            var weekAttendance = 0;
            var workDone = 0;
            // console.log(dateObj);
            weeks++;
            m += parseInt(dateObj["mon"]);
            weekAttendance += parseInt(dateObj["mon"]);
            t += parseInt(dateObj["tues"]);
            weekAttendance += parseInt(dateObj["tues"]);
            w += parseInt(dateObj["wed"]);
            weekAttendance += parseInt(dateObj["wed"]);
            tr += parseInt(dateObj["thurs"]);
            weekAttendance += parseInt(dateObj["thurs"]);
            f += parseInt(dateObj["fri"]);
            weekAttendance += parseInt(dateObj["fri"]);

            if (dateObj["allClasses"] === "yes") {
                workDone++;
            }
            if (dateObj["allSessions"] === "yes") {
                workDone++;
            }
            if (dateObj["meetProf"] === "yes") {
                workDone++;
            }
            // if (dateObj["observe"] === "yes") {
            //     workDone++;
            // }
            thingsDid.push(workDone);
            numStudents.push(weekAttendance);
        }
        // console.log("Work done: " + thingsDid);
        // console.log("num students: " + numStudents);

        setTimeout(() => {
            this.setState({
                data: newProps.data,
                avgMon: m/weeks,
                avgTues: t/weeks,
                avgWed: w/weeks,
                avgThurs: tr/weeks,
                avgFri: f/weeks,
                thingsDid: thingsDid,
                numStudents: numStudents,
                displayGraph: true
            });
        }, 1000);
        
        // console.log(this.state);
    }

    generateGraphs(event) {
        this.setState({
            data: this.state.data,
            avgMon: this.state.avgMon,
            avgTues: this.state.avgTues,
            avgWed: this.state.avgWed,
            avgThurs: this.state.avgThurs,
            avgFri: this.state.avgFri,
            thingsDid: this.state.thingsDid,
            numStudents: this.state.numStudents,
            displayGraph: true
        });
    }

    render() {

        if (this.state.data == null || Object.keys(this.state.data).length == 0) {
            return (
                <div>
                    <h2>No results...</h2>
                </div>
            ); 
        }

        if (this.state.displayGraph) {
            var max = Math.max(this.state.avgMon, this.state.avgTues, this.state.avgWed,
                this.state.avgThurs, this.state.avgFri);

            var presentation1 = [];
            var presentation2 = [];
            console.log(this.state.thingsDid);
            for (var i = 0; i < Object.keys(this.state.thingsDid).length; i++) {
                console.log(this.state.thingsDid[i.toString()]);
                presentation1.push(
                    {'x': i+1, 'y': this.state.thingsDid[i.toString()]}
                )
                presentation2.push(
                    {'x': i+1, 'y': this.state.numStudents[i.toString()]}
                )
            }

            console.log(presentation1);
            console.log(presentation2);

            return (
                <div>
                    <h2>Student Found!</h2>
                    <h2>SI Leader Work And Student Attendance Trend Lines</h2>
                    <h3>SI Work Amount: Goto All Classes, Goto All Sessions, and Met Professor</h3>
                    <LineChart
                        axisLabels={{x: 'Attendance/Work of SI in Week', y: 'Number of Students Going to Sessions'}} 
                        axes
                        grid
                        yDomainRange={[0, 3]}
                        interpolate={'cardinal'}
                        height={350} 
                        width={550} 
                        data={[
                            presentation1
                        ]}
                    />
                    <h2>Number of Students Going to SI Sessions Per Week</h2>
                    <LineChart
                        axisLabels={{x: 'Attendance/Work of SI in Week', y: 'Number of Students Going to Sessions'}} 
                        axes
                        grid
                        interpolate={'cardinal'}
                        yDomainRange={[0, 70]}
                        height={350} 
                        width={550} 
                        data={[
                            presentation2
                        ]}
                    />
                    <h3>Average number of students per week of the current SI</h3>
                    <p>The max average number of students: {max}</p>
                    <BarChart 
                        axisLabels={{x: 'Day of Week', y: 'Number of Students'}} 
                        axes 
                        grid
                        colorBars 
                        height={350} 
                        width={550} 
                        barWidth={5}
                        data={[
                            {x: 'Monday', y: this.state.avgMon},
                            {x: 'Tuesday', y: this.state.avgTues},
                            {x: 'Wednesday', y: this.state.avgWed},
                            {x: 'Thursday', y: this.state.avgThurs},
                            {x: 'Friday', y: this.state.avgFri}
                        ]}
                    />
                </div>
            )
        }

        return (
            <div>
                <h2>Student Found!</h2>
                <button type="button" onClick={this.generateGraphs}>Generate Graphs</button>
            </div>
        )
    }
}

class LeaderStatsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
            didLoad: false,
            data: null,
            username: ''
        };

        this.submitData = this.submitData.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        this.setState({
            search: '',
            didLoad: true,
            data: null,
            username: ''
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'radio' ? target.value : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    submitData(event) {
        event.preventDefault();

        const db = firebase.database().ref('/records/' + this.state.search);
        if (this.state.search === '') {
            this.setState({
                search: this.state.search,
                didLoad: this.state.didLoad,
                data: null,
                username: ''
            });
        }
        else {
            db.once('value').then((snapshot) => {
                //console.log(snapshot.val());
                this.setState({
                    search: this.state.search,
                    didLoad: this.state.didLoad,
                    data: snapshot.val(),
                    username: snapshot.val()['username']
                });
            });
            
        }        
    }

    render() {

        if (!this.state.didLoad) {
            <div className="Stats">
                <h1>Loading Content</h1>
            </div>
        }

        return (
            <div className="Stats">
                <h1>SI Leader Stats Page</h1>
                <form>
                    <section>
                        <h2>Search a user by EUID to get statistics:</h2>
                        <textarea name="search" rows="1" cols="30" maxLength="10" onChange={this.handleInputChange}></textarea>
                    </section>
                    <input type="submit" value="Submit" className="Stats__submit" onClick={this.submitData} />
                </form>
                <UserData data={this.state.data} />
            </div>
        )
    }
}

export default LeaderStatsPage;