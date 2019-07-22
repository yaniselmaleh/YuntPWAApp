import React, { Component } from 'react';
import '../sass/components/_loader.scss';
import Slide from '../components/Slide';

class Loader extends Component {

    constructor(props) {
        super(props);
        this.state = {
          Show: false
        }
    }

    componentDidMount() {
        setTimeout( () => {
            this.setState({Show: true});
        }, 3200)
    }

    render(){
        if(this.state.Show){
            return <React.Fragment><Slide/></React.Fragment>
        } else{
            return <section id="loader"></section>
        }
    }
}

export default Loader