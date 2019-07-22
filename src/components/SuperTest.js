import React, { Component } from 'react'
// import fire from '../config/Fire';
// import React from 'react';
// import Swiper from 'react-id-swiper';

// import React, { useState } from 'react';
// import useVibration from 'react-vibration-hook';
// import useVibration from '@21kb/react-vibration-hook';
 

// function SuperTest() {
//   // Déclaration d'une nouvelle variable d'état, que l'on appellera “count”
//   const [count, setCount] = useState(0);
//   const [vibrate] = useVibration();

//   return (
//     <div>
//       <p>Vous avez cliqué {count} fois</p>
//       <button onClick={() => setCount(count + 1)}>
//         Cliquez ici
//       </button>

//       <br></br>

//       <button onClick={() => vibrate()}>Vibrate for 200ms (the default)</button>
//       <button onClick={() => vibrate(350)}>Vibrate for 350ms</button>
//     </div>
//   );
// }




// class SuperTest extends Component {
//   constructor(props) {
//     super(props);
//     this.logout = this.logout.bind(this);
//     this.state = {
//       Msg: ''
//     };
// }

// logout() {
//     fire.auth().signOut();
//     // console.log(error);
// }

// render() {

//     return (
//         <div>
//             <h1>Welcome to Home</h1>
//             <button onClick={this.logout} style={{padding:'5%', backgroundColor:'red'}}>Déconnexion</button>
//         </div>
//     );
// }
// }


//                         <p>Ce niveau est en <b>cours de développement</b>, n'hésitez surtout pas à nous suivre sur <b>Facebook</b> pour être informé lors de sa sortie. <br></br><b>De nombreuses surprises surprises vous attendent là bas</b></p>

class SuperTest extends Component {

  constructor(props){
    super(props)
    this.tick = this.tick.bind(this)
    this.state = {
        seconds: 900,
        Show: false
    }
}

componentDidMount(){
    this.timer = setInterval(this.tick, 1000);
    setTimeout( () => {
        this.setState({Show: true});
    }, 3200)
  }

tick(){
    if (this.state.seconds > 0) {
        this.setState({seconds: this.state.seconds - 1})
    } else {
        clearInterval(this.timer);
        console.log("Clear");
    }
}



render() {
  
    return (
        <div>
            <h1>Welcome to Home</h1>
            <p>
                {this.state.seconds}
            </p>
        </div>
    );
    }
  }

export default SuperTest;