import React, { Component } from 'react'
import '../sass/components/_Ready.scss'
import Enigme1 from './enigmes/Enigme1';

class Ready extends Component {

    constructor(props){
        super(props)
        this.tick = this.tick.bind(this)
        this.state = {
            seconds: 3,
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
    render(){

        if(this.state.Show){
            return <React.Fragment><Enigme1/></React.Fragment>
        } else{
            return <section id="count">
            <h1>Vous êtes prêt ?</h1>
            <p>
                {this.state.seconds}
            </p>
        </section>
        }

    }
}

export default Ready
