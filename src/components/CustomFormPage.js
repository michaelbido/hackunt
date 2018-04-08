import React, { Component } from 'react';

import '../css/CustomizeForm.css';

import firebase from '../firebase';

class CustomFormPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: "Loading",
            didLoad: false,
            update: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitData = this.submitData.bind(this);
    }

    componentWillMount() {
        const db = firebase.database().ref('/customQuestion');
        db.once('value').then((snapshot) => {
            var q = snapshot.val();
            this.setState({
                question: q.question,
                didLoad: true,
                update: ''
            });
        });
        // console.log(this.state.question);
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
        // event.preventDefault();
        const db = firebase.database().ref('/customQuestion');
        db.set({question: this.state.update});
        // console.log(this.state.update);
        alert('The question update has been submitted.');
    }

    render() {

        if (!this.state.didLoad) {
            return (
                <div className="CustomizeForm">
                    <h1>Customize Form Question</h1>
                    <h2>Currently loading question from database...</h2>
                </div>
            );
        }

        return (
            <div className="CustomizeForm">
                <h1>Customize Form Question</h1>
                <h2>Current Question: {this.state.question}</h2>
                <form>
                    <section>
                        <h2>Update the question:</h2>
                        <textarea name="update" rows="5" cols="62" maxLength="200" onChange={this.handleInputChange}></textarea>
                    </section>
                    <input type="submit" value="Submit" className="CustomizeForm__submit" onClick={this.submitData} />
                </form>
            </div>
        );
    }
}

export default CustomFormPage;