import React, { Component } from 'react'
import Progression from '../img/yunt-concept2.png';
import { Link } from "react-router-dom";

import '../sass/components/_svg.scss';
import Time from '../img/time.svg';
import Brain from '../img/brain.png';
import Parcours from '../img/parcours.png';
import Reflexion from '../img/reflexion.png';
import BoulangerLogo from '../img/logo-boulanger.png';
import AppleLogo from '../img/appleLogo.png';
import '../sass/components/_BrandsSection.scss';
import ProgressBar from './ProgressBar';


class BrandsSection extends Component {

    constructor(props){
        super(props);
        this.state = {
          percentage1: 75,
          percentage2: 25,
          percentage3: 45 
        }
      }

    render(){
        return(
            <section className="ContainerBrandSection">
                <section id="BrandsSection1">
                    <img src={Progression} alt="Progression"/>
                    <span>Niveau 1</span>
                    <h2>Explorateur</h2>
                    <img src={Time} alt="Time" className="time" />
                <p>10mn</p>
                </section>
            
                <section id="BrandsSection2">
                    <article className="ArticleBrands1">
                        <img src={Reflexion} alt="Reflexion" className="icon" />
                        <p>Fouille</p>
                        <ProgressBar percentage={this.state.percentage1}/>
                    </article>

                    <article className="ArticleBrands2">
                        <img src={Parcours} alt="Parcours" className="icon" />
                        <p>Parcours</p>
                        <ProgressBar percentage={this.state.percentage2}/>
                    </article>

                    <article className="ArticleBrands3">
                        <img src={Brain} alt="Brain" className="icon" />
                        <p>Réflexion</p>
                        <ProgressBar percentage={this.state.percentage3}/>
                    </article>
                </section>
            
                <section id="BrandSection3">
                    <Link to="/map">
                        <div className="flexBrand">
                            <aside>
                                <img src={BoulangerLogo} alt="Time" className="boulangerLogo" />
                            </aside>
                            <article>
                                <h2>Boulanger</h2>
                                <p>Champs de Mars</p>
                            </article>
                        </div>
                    </Link>

                    <Link to="/section">
                        <div className="flexBrand flexBrand2">
                            <aside>
                                <img src={AppleLogo} alt="Time" />
                            </aside>
                            <article>
                                <h2>Apple</h2>
                                <p>Ballard</p>
                            </article>
                        </div>
                    </Link>
                </section>

                <p id="selectlvl">Choisissez votre niveau</p>

            </section>

        )
    }
}

export default BrandsSection