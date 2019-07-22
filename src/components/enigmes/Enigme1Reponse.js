import React, { Component } from 'react';

import '../../sass/components/_LayoutCards.scss';
import Time from '../../img/time.svg';

import Oursoupidou from '../../img/inspecteur.gif';
import LayoutEnigmeCta from '../Layout/Enigmes/LayoutEnigmeCta';
import ProgressBar from '../ProgressBar';

// import useVibration from '@21kb/react-vibration-hook';

class Enigme1Reponse extends Component {
    
    constructor(props){
        super(props);
        
          this.state = {
          percentage: 15 
        }
      }


    //   example1(e) {
    //     window.navigator = window.navigator || {};
    //      if (navigator.vibrate) {
    //         document.getElementById('button-play-v-once').addEventListener('click', function() {
    //            navigator.vibrate(300);
    //         });
    //      }
    //   }

      render(){
        // const [vibrate] = useVibration();
    
        return( <div>

        <section id="timmer" className="EnigmeFlex">
            <img src={Time} alt="timmer" id="EnigmeTime"/>
            {/* <p><Countdown date={Date.now() + 10000} /></p> */}
            <p>9:40</p>
        </section>

        <section id="EnigmeImg" className="EnigmeFlex">
            <div>
                <img src={Oursoupidou} alt="Oursoupidou"/>
            </div>
        </section>

        <section id="EnigmeCtaCard" className="EnigmeFlex">
            <div>       
                <span>Explorateur</span>
                {/* <button id="button-play-v-once" onclick={this.example1}>Vibrate Once</button> */}
                <h2>Énigme n°1</h2>
                <br></br>
                <br></br>
                <LayoutEnigmeCta name="Un Ordinateur" title="Un ordinateur" className="filled" url="/enigme1-reponse" onclick={this.example1}/>
                <br></br>
                <LayoutEnigmeCta name="Un Casque" title="Un casque" className="filled" url="/enigme1-reponse"/>
                <br></br>
                <LayoutEnigmeCta name="Un Téléphone" title="Un téléphone" className="filled" url="/draw"/>
                <br></br>
                <LayoutEnigmeCta name="Un Lion" title="Un lion" className="filled" url="/enigme1-reponse"/>
            </div>
        </section>

        <section id="EnigmeProg" className="EnigmeFlex">
            <p>Progression</p>
            <ProgressBar percentage={this.state.percentage}/>
        </section>
    </div>
        )}
}

export default Enigme1Reponse