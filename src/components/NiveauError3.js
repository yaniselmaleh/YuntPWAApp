import React, { Component } from 'react'
import Progression from '../img/yunt-progression2.png';
import '../sass/components/_NiveauError.scss';
import '../sass/components/_cta.scss';
import { Link } from "react-router-dom";


class NiveauError extends Component {
    render(){
        return(
            <section id="NiveauError">
                    <aside>
                        <img src={Progression} alt="Aventurier" style={{width: '60%', marginTop: '10vh', opacity:".5"}}/>
                    </aside>
                    <article>
                        <h2>Oops !</h2>
                        <p>Ce niveau est en <b>cours de développement</b>, n'hésitez surtout pas à nous suivre sur <b>Facebook</b> pour être informé lors de sa sortie. <br></br><b>De nombreuses surprises surprises vous attendent là bas</b></p>
                        <Link to="/niveau" className="btn-unfilled">Retour au niveau</Link>

                    </article>
                </section>
        )
    }
}

export default NiveauError