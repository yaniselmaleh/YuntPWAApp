import React, { Component } from 'react'

import '../../sass/components/_reset.scss';
import '../../sass/components/_Felicitation.scss';
import '../../sass/components/_cta.scss';
import Time from '../../img/time.svg';
import { Link } from "react-router-dom";


import Tresor from '../../img/treesor.png';

class Felicitation extends Component {
    render(){
        return(
            <div className="felicitation">
                <img src={Tresor} alt="Concept"/>
                <h2>Félicitations !</h2>
                <span id="data_victoire">
                    YUNO
                </span>
                <p>Bonnes réponses : <b>3 sur 8</b></p>
                <p>Classement : <b>2ème sur 10</b></p>
                <p>
                <br></br>
                    <img src={Time} alt="timmer" id="Time1"/>
                    9:45
                </p>

                <br></br>
                <br></br>
                <Link to="/login" className="btn-filled">S'inscrire pour poursuivre</Link>
            </div>
        )
    }
}

export default Felicitation