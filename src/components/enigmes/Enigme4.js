import React, { Component } from 'react'
// import '../../sass/components/_reset.scss'
import '../../sass/components/_LayoutEnigmes2.scss'
import '../../sass/components/_cta.scss'
import Time from '../../img/time.svg';
import Oursoupidou from '../../img/oursoupisearch.png';
import ProgressBar from '../ProgressBar';
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import '../../sass/components/_PopUp.scss';



class Enigme4 extends Component {

    constructor(props){
        super(props);
        
          this.state = {
          percentage: 80 
        }
      }
    render(){
        return(
            <div>
                <section id="timmer" className="EnigmeFlex">
                    <img src={Time} alt="timmer" id="EnigmeTime"/>
                    <p>9:45</p>
                </section>
                
                <section id="EnigmeImg"  className="EnigmeFlex">
                    <div>
                        <img src={Oursoupidou} alt="Oursoupidou"/>
                    </div>
                </section>
                
                <section id="EnigmeContent"  className="EnigmeFlex">
                    <p>
                        <b>Bonne réponse.</b>
                        <br></br>
                        rendez-vous à cet endroit, on m’informe que <b>le voleur y a laissé un mot.</b>
                        <br></br>
                        <br></br>
                        <b>Qu’y a-t-il marqué ?</b>
                    </p>
                </section>
                
                <section id="EnigmeCta"  className="EnigmeFlex">
                    <div>
                        <Link to="/enigme4-reponse" className="btn-unfilled">Répondre</Link>
                        <br></br>
                        <Popup trigger={<a className="btn-filled" title="hello">Indice</a>} position="top center">
                            {close => (
                                <p>
                                    <a className="close" onClick={close}><b>X</b></a>
                                    
                                    L'objet déplacé est un petit produit utile dans la vie de tous les jours
                                </p>
                            )}
                        </Popup>
                    </div>   
                </section>
                <section id="EnigmeProg" className="EnigmeFlex">
                    <p>Progression</p>
                    <ProgressBar percentage={this.state.percentage}/>
                </section>
            </div>
        )
    }
}

export default Enigme4