import React, { Component } from 'react'
import '../sass/components/_reset.scss';
import '../sass/components/_svg.scss';
import '../sass/components/_cta.scss';
import '../sass/components/_Niveau.scss';
import Anime from 'react-anime';

import Time from '../img/time.svg';
import Concept from '../img/yunt-concept2.png';
import Progression from '../img/yunt-progression2.png';
import Recompense from '../img/yunt-recompenses3.png';
import { Link } from "react-router-dom"
;
class Niveau extends Component {
    render(){
        return(
        <section className="lvl">
                
                <Anime opacity={(0, 1)}>
                
                <section id="lvl1">
                    <aside>
                        <img src={Concept} alt="Explorateur" />
                    </aside>
                    <article>
                        <span>Chapitre 1</span>
                        <h2>Explorateur</h2>
                        <img src={Time} alt="Time" className="time" />
                        <p>10mn</p>
                        <Link to="/section" className="btn-unfilled">Selectionner</Link>
                    </article>
                </section>
                
                <section id="lvl2">
                    <aside>
                        <img src={Recompense} alt="Aventurier" />
                    </aside>
                    <article>
                        <span>Chapitre 2</span>
                        <h2>Aventurier</h2>
                        <img src={Time} alt="Time" className="time" />
                        <p>15mn</p>
                        <Link to="/niveauerror2" className="btn-unfilled">Selectionner</Link>
                    </article>
                </section>

                <section id="lvl3">
                    <aside>
                        <img src={Progression} alt="Chelavier" />
                    </aside>
                    <article>
                        <span>Chapitre 3</span>
                        <h2>Chevalier</h2>
                        <img src={Time} alt="Time" className="time" />
                        <p>20mn</p>
                        <Link to="/niveauerror3" className="btn-unfilled">Selectionner</Link>
                    </article>
                </section>
                <p id="selectlvl">Choisissez votre niveau</p>
                </Anime>

        </section>
        )
    }
}

export default Niveau