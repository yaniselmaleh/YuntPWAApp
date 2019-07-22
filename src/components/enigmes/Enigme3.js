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



class Enigme3 extends Component {

    constructor(props){
        super(props);
        
          this.state = {
          percentage: 50 
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
                        Nous avons eu <b>accès aux caméras de surveillance.</b>
                            <br></br><br></br>
                        je vous envoie ça sur votre appareil.
                            <br></br><br></br>
                        <b>Quel est le produit que le voleur a pris ?</b>
                    </p>
                </section>
                
                <section id="EnigmeCta"  className="EnigmeFlex">
                    <div>
                        <Link to="/enigme3-reponse" className="btn-unfilled">Voir l'image</Link>
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

export default Enigme3