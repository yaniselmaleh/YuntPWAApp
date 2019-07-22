import React, { Component } from 'react'
import Progression from '../img/yunt-concept2.png';
import '../sass/components/_lock.scss';
import '../sass/components/_reset.scss';
import '../sass/components/_cta.scss';

class Lock extends Component {
    render(){
        return(
            <section id="lock">
                <img src={Progression} alt="Progression"/>
                <h2>Aïe !</h2>
                <p>
                On comprend que vous voulez tout de suite <b>passer aux choses sérieuses…</b> faites vos preuves au <b>premier niveau afin de débloquer celui-ci</b>
                </p>
                <a href="slide.js" className="btn-unfilled">Passer l'introduction</a>
            </section>
        )
    }
}

export default Lock;