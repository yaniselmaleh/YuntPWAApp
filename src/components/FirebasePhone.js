import React, { Component } from 'react'

import firebase from 'firebase';

class FirebasePhone extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       phone: ''
    //     };
    //   }
    
    // login(){
    //     console.log(3578);
    // }

    // var applicationVerifier = new firebase.auth.RecaptchaVerifier( 'recaptcha-container');
    // var provider = new firebase.auth.PhoneAuthProvider(); provider.verifyPhoneNumber('+16505550101', applicationVerifier) .then(function(verificationId) { 

    // var verificationCode = window.prompt('Please enter the verification ' + 'code that was sent to your mobile device.'); 
    
    // return firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode); }) .then(function(phoneCredential) { return firebase.auth().signInWithCredential(phoneCredential); });


    // requestVerificationCode = () => {
    //     const { phoneNumber } = this.state;
    //     const appVerifier = new firebase.auth.RecaptchaVerifier(
    //       "recaptcha-container"
    //     );
    //     if (phoneNumber < 10) {
    //       this.setState({ error: true });
    //     } else {
    //       this.setState({ message: "Sending code ..." });
    
    //       firebase
    //         .auth()
    //         .signInWithPhoneNumber(phoneNumber, appVerifier)
    //         .then(confirmResult =>
    //           this.setState({ confirmResult, verifying: true })
    //         )
    //         .catch(error =>
    //           this.setState({
    //             message: `Sign In With Phone Number Error: ${error.message}`
    //           })
    //         );
    //     }
    //   };


// rotato




    //   componentDidMount () {
    //     fire.auth().recaptchaVerifier = new fire.auth.RecaptchaVerifier("recaptcha-container",
    //     {
    //        size:"invisible"
    //         // other options
    //     });
    // }
    
    // onClick() {
    //     const phoneNumber = this.phone;
    //     const appVerifier = window.recaptchaVerifier;
    //     fire.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then(confirmResult => {
    //       // success
    //     })
    //     .catch(error => {
    //       // error
    //     });
    // }





    componentDidMount () {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container",
      {
         size:"invisible"
          // other options
      });
  }
  
  test() {
      // const phoneNumber = "+33640531205";
      const phoneNumber = "+33601317737";
      const appVerifier = window.recaptchaVerifier;
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then(confirmResult => {
        // success
        console.log("Succes");
      }).catch(error => {
        // error
        console.log("Error");
      });

    }
    
    render(){
      const phoneNumber = "+33649859994";
      // const phoneNumber = "+33601317737";
      console.log(phoneNumber);

      return(
        <section>
          <div id="firebaseui-auth-container"></div>
            <form>
                <label htmlFor="phone">Phone</label>
                <br></br>
                {/* <div id="recaptcha-container"></div> */}
                <input id="recaptcha-container" type="button" value="test" onClick={this.test} />

                {/* <input id="recaptcha-continer" type="button" onClick="this.onClick" /> */}
                {/* <input type="phone"/>é */}
                <br></br>
                {/* <button type="submit" onClick={this.state.phone}>Connexion</button> */}
            </form>
        </section>
    )


      // var recaptchaVerifier;
      // recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      //   'size': 'normal',
      //   'callback': function(response) {
      //     // reCAPTCHA solved, allow signInWithPhoneNumber.
      //     test();
      //   }
      // });

      // recaptchaVerifier.render().then(function(widgetId) {
      //   window.recaptchaWidgetId = widgetId;
      // });
      // function test(){
      //   var phoneNumber = "+33699437027";
      //     // var appVerifier = window.recaptchaVerifier;
      //     var appVerifier = recaptchaVerifier.getResponse(window.recaptchaWidgetId);
      //     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      //     .then(function (confirmationResult) {
      //       // SMS sent. Prompt user to type the code from the message, then sign the
      //       // user in with confirmationResult.confirm(code).
      //       window.confirmationResult = confirmationResult;
      //     }).catch(function (error) {
      //       // Error; SMS not sent
      //       // ...
      //     });
      // }
      

      // var uiConfig = {
      //   signInSuccessUrl: 'https://yunt.io',
      //   signInOptions: [
      //     // Leave the lines as is for the providers you want to offer your users.
      //     fire.auth.PhoneAuthProvider.credential(verificationId,
      //       verificationCode);
      //   ],
      //   // tosUrl and privacyPolicyUrl accept either url string or a callback
      //   // function.
      //   // Terms of service url/callback.
      //   tosUrl: 'https://yunt.io',
      //   // Privacy policy url/callback.
      //   privacyPolicyUrl: function() {
      //     window.location.assign('https://yunt.io');
      //   }
      // };

      // // Initialize the FirebaseUI Widget using Firebase.
      // var ui = new firebaseui.auth.AuthUI(fire.auth());
      // // The start method will wait until the DOM is loaded.
      // ui.start('#firebaseui-auth-container', uiConfig);

      

        // fire.auth().languageCode = 'fr';

        // new fire.auth.RecaptchaVerifier('sign-in-button', {
        //   'size': 'invisible',
        //   'callback': function(response) {
        //     // reCAPTCHA solved, allow signInWithPhoneNumber.
        //     // onSignInSubmit();
        //     console.log(response);
        //   }
        // });
        
        
    }
}

export default FirebasePhone