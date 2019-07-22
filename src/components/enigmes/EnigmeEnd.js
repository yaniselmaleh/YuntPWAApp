import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../../sass/components/_cta.scss';

import '../../sass/components/_EnigmeFin.scss';

class EnigmeEnd extends Component {
    render(){
        return(
            <section id="EnigmeFinMD">
                <Link to="/felicitation" className="btn-unfilled"> Passer la cinématique</Link>
            </section>
        )
    }
}

export default EnigmeEnd