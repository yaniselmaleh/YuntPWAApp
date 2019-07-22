import React, { Component } from 'react'
import fire from '../config/Fire';

class FirebaseHome extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <h1>Welcome to Home</h1>
                <button onClick={this.logout}>Déconnexion</button>
            </div>
        );
    }
}

export default FirebaseHome