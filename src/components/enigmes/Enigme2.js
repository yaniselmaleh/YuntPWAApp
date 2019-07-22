import React, { Component } from 'react'
// import '../../sass/components/_reset.scss'
import '../../sass/components/_LayoutEnigmes2.scss'
import '../../sass/components/_cta.scss'
import Time from '../../img/time.svg';
import Oursoupidou from '../../img/inspecteur.gif';
import ProgressBar from '../ProgressBar';
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import '../../sass/components/_PopUp.scss';




class Enigme2 extends Component {

    constructor(props){
        super(props);
        
          this.state = {
          percentage: 35 
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
                
                <section id="EnigmeContent2"  className="EnigmeFlex">
                    <p>
                        Bravo !
                        <br></br>
                        Malheureusement on ne peut pas en savoir plus car le <b>téléphone est vérouillé…</b>
                        <br></br>
                        <br></br>
                        Ah ! Je me souviens avoir vu un <b>téléphone qui émettait des signaux étranges.</b> Essaies de voir à <b>quoi ça pourrait correspondre</b>.
                    </p>
                </section>
                
                <section id="EnigmeCta2" className="EnigmeFlex">
                    <div>
                        <Link to="/enigme3" className="btn-unfilled">J'ai trouvé</Link>
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

export default Enigme2