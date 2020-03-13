import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar">
                <h1>{this.props.title}</h1>
                <i className="fas fa-bars"></i>
            </div>
        );
    }
}