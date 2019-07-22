import React, { Component } from 'react'
import Oursoupidou from '../img/OursoupngDebout.png';
import '../sass/components/_introduction.scss';
import '../sass/components/_cta.scss';
import { Link } from "react-router-dom";

class LeVol extends Component {
    render(){
        return(
            <section id="introduction">
                <aside>
                    <img src={Oursoupidou} alt="Chelavier" />
                </aside>
                <article>
                    <h2>Soyez prêt.</h2>
                    <p>
                        <b>Un produit a été volé à Boulanger,</b> nous ne savons pas encore leqel mais nous savons que <b>le voleur l'a laissé ici,</b> le problème c’est qu’il reste introuvable.
                        
                        <br></br><br></br>

                        vous nous aiderez à <b>rassembler les indices</b> et retrouver l’objet.
                    </p>
                    <Link to="/pret" className="btn-unfilled">Passer l'introduction</Link>
                </article>
            </section>
        )
    }
}

export default LeVol