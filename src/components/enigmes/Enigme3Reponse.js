import React, { Component } from 'react';
import {isBrowser} from 'react-device-detect';

import '../../sass/components/_LayoutCards.scss';
import Time from '../../img/time.svg';

import Camera from '../../img/camera.png';
import LayoutEnigmeCta from '../Layout/Enigmes/LayoutEnigmeCta';
import ProgressBar from '../ProgressBar';

import IsLaptop from '../IsLaptop';
// import Countdown from 'react-countdown-now';

class Enigme3Reponse extends Component {
    
    constructor(props){
        super(props);
        
          this.state = {
          percentage: 50
        }
      }

    renderContent = () => {
        if (isBrowser) {
            return <section id="laptop"><IsLaptop/></section>
        }
        
        return <div>

        <section id="timmer" className="EnigmeFlex">
            <img src={Time} alt="timmer" id="EnigmeTime"/>
            {/* <p><Countdown date={Date.now() + 10000} /></p> */}
            <p>9:40</p>
        </section>

        <section id="EnigmeImg" className="EnigmeFlex">
            <div>
                <img src={Camera} alt="Camera" id="EnigmeCamera"/>
            </div>
        </section>

        <section id="EnigmeCtaCard" className="EnigmeFlex">
            <div>       
                <span>Explorateur</span>
                <h2>Énigmes n°3</h2>
                <br></br>
                <br></br>
                <LayoutEnigmeCta name="Un Ordinateur" title="Un Ordinateur" className="filled" url="//enigme3-reponse"/>
                <br></br>
                <LayoutEnigmeCta name="Un Casque" title="Un Casque" className="filled" url="//enigme3-reponse"/>
                <br></br>
                <LayoutEnigmeCta name="Un Téléphone" title="Un Téléphone" className="filled" url="/enigme4"/>
                <br></br>
                <LayoutEnigmeCta name="Un Lion" title="Un Lion" className="filled" url="//enigme3-reponse"/>
            </div>
        </section>

        <section id="EnigmeProg" className="EnigmeFlex">
            <p>Progression</p>
            <ProgressBar percentage={this.state.percentage}/>
        </section>
    </div>
    }

    render(){
        return this.renderContent();
    }
}

export default Enigme3Reponse