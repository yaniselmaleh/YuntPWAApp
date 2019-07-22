import React, { Component } from 'react';
import fire from '../config/Fire';
import '../sass/components/_Login.scss';
import { Link } from "react-router-dom";



class FirebaseLogin extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: '',
      errorMsg: '',
      emailMsg: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      fire.auth().currentUser.sendEmailVerification(this.state.email)
    }).catch((error) => {
      this.setState({errorMsg: error.message});
        console.log(error);
        // if (error.Code === 'auth/wrong-password') {
        //   alert('Wrong password.');
        // } else {
        //   alert("mauvais mot de passe");
        // }
      });
  }

  sendEmailVerification(e) {
    // [START sendemailverification]
    fire.auth().currentUser.sendEmailVerification().then((e) =>{
      // Email Verification sent!
      // [START_EXCLUDE]
      alert('Email Verification Sent!');
      // [END_EXCLUDE]
    });
    // [END sendemailverification]
  }

  sendPasswordReset(e) {
    var email = document.getElementById('email').value;
    // [START sendpasswordemail]
    fire.auth().sendPasswordResetEmail(email).then((u) =>{
      // Password Reset Email Sent!
      // [START_EXCLUDE]
      alert('Password Reset Email Sent!');
      // [END_EXCLUDE]
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/invalid-email') {
        alert(errorMessage);
      } else if (errorCode === 'auth/user-not-found') {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
    // [END sendpasswordemail];
  }
    
    signup(e){
      e.preventDefault();
      fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u)=>{console.log('u', u)})
      .catch((error) => {
        this.setState({errorMsg: error.message});
        console.log('e',error);
      })
    }
    render() {
    return (
      <div id="Firebase">
        <div id="contentFirebase">
          <h1>Ça vous a plu ?</h1>
          <p>Et si nous gardions conact ?</p>
        </div>
        <form>
          <div id="firstinput">
            <label htmlFor="exampleInputEmail1">Adresse email</label>
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="exemple@gmail.com" id="email" className="btn-firebase"/>
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <div id="secondinput">
            <label htmlFor="exampleInputPassword1">Mot de passe</label>
            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Mot de passe" className="btn-firebase"/>
            <Link className="next_introduction" id="btn-firebase2" onClick={this.sendPasswordReset}>Mot de passe oublié ?</Link>
          </div>
          {/* <button type="submit" onClick={this.login}>Connexion</button> */}
          {/* <button onClick={this.signup} style={{marginLeft: '25px'}}>Inscription</button> */}
          {/* <LayoutEnigmeCta name="J'ai trouvé" title="j'ai trouvé" className="unfilled" url="/enigme1-reponse"/> */}
    
          <div>
            <p>{this.state.errorMsg}</p>
            <br/>
            <br/>

            <Link className="btn-unfilled" id="firebaseConnexion" type="submit" onClick={this.login}>Connexion</Link>
            <br/>
            <Link className="btn-filled" onClick={this.signup}>Inscription</Link>
            <Link to="/niveau" className="next_introduction">Retour aux niveau</Link>

          </div>
        </form>
      
      </div>
    );
  }
}
export default FirebaseLogin;