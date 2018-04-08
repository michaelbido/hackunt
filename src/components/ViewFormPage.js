import React, { Component } from 'react';

import '../css/ViewForm.css';

import firebase from '../firebase';

class AllForms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            euid: ''
        }
    }

    render() {

        if (this.state.euid === '') {
            return (
                <h1>test</h1>
            );
        }

        return (
            <h1>Wow</h1>
        );
    }
}

class ViewFormPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            didLoad: false
        }
    }

    componentDidMount() {
        this.setState({
            didLoad: true
        });
    }

    render() {
        
        if (!this.state.didLoad) {
            return (
                <h1>LOADING :)</h1>
            );
        }

        return (
            <div className='ViewForm'>
                <h1>View Form</h1>
                <AllForms />
            </div>
        );
    }
}

export default ViewFormPage;