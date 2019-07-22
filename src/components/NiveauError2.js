import React, { Component } from 'react'
import Aventurier from '../img/yunt-recompenses3.png';
import '../sass/components/_NiveauError.scss';
import '../sass/components/_cta.scss';
import { Link } from "react-router-dom";


class NiveauError extends Component {
    render(){
        return(
            <section id="NiveauError">
                    <aside>
                    <img src={Aventurier} alt="Aventurier" style={{width: '60%', marginTop: '10vh', opacity:".5"}}/>
                    </aside>
                    <article>
                    <h2>Aïe !</h2>
                        <p>On comprend que vous voulez tout de suite <b>passer aux choses
                        sérieuses…</b> faites vos preuves
                        au <b>premier niveau afin de débloquer celui-ci</b></p>
                        <Link to="/niveau" className="btn-unfilled">Retour au menu</Link>


                    </article>
                </section>
        )
    }
}

export default NiveauError