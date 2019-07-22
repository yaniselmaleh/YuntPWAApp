import React, { Component } from 'react';
import fire from '../config/Fire';
// import FirebaseHome from './FirebaseHome';
import FirebaseLogin from './FirebaseLogin';
import Niveau2 from './Niveau2';

class Firebase extends Component {

    constructor(props){
        super(props);
        this.state = {
            user:{},
        }
    }

    componentDidMount(){
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
          console.log(user);
          
          if (user) {
            this.setState({ user });
            localStorage.setItem('user', user.uid);
          }
          else {
            this.setState({ user: null });
            localStorage.removeItem('user');
          }
        });
      }

    render(){
        return(
            <section>
                {/* {this.state.user ? : (<FirebaseHome/>) : (<FirebaseLogin/>)} */}
                {/* {this.state.user ? ( <FirebaseHome/>) : (<FirebaseLogin />)} */}
                {this.state.user ? ( <Niveau2/>) : (<FirebaseLogin />)}
            </section>
        )
    }
}

export default Firebase