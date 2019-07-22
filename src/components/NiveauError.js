import React, { Component } from 'react'
import Oursoupidou from '../img/oursoupidou.gif';
import '../sass/components/_NiveauError.scss';
import '../sass/components/_cta.scss';
import { Link } from "react-router-dom";


class NiveauError extends Component {
    render(){
        return(
            <section id="NiveauError">
                    <aside>
                        <img src={Oursoupidou} alt="Chelavier" />
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