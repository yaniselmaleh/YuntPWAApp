import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { Link } from "react-router-dom";

import '../sass/components/_reset.scss';
import '../sass/components/_Swiper.scss';
import '../sass/components/_cta.scss';

import Concept from '../img/yunt-concept.gif';
import Progression from '../img/yunt-progression.gif';
import Recompense from '../img/yunt-recompenses.gif';
import BotImage from '../img/oursoupidou.gif';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Slide extends Component {
  
  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }
    return (
      <Swiper {...params} className="slider_onboarding">
        {/* <SlideLayout image={img1} title="coucouc" description="lorem"/> */}

        <div className="slider_onboarding">
            <img src={Concept} alt="Concept"/>
            <h2>Concept</h2>
            <br></br>
            <p>Participez à une <b>chasse aux tresors dans nos magasins partenaires</b> partout en <b>France</b> et <b>gagnez de nombreuses récompenses.</b></p>
            <div id="paginationreplace">
              <span className="paginationreplace pr-active"></span>
              <span className="paginationreplace pr-mid"></span>
              <span className="paginationreplace"></span>
            </div>
            <Link to="/niveau" className="next_intro">Passer l'introduction</Link>
        </div>

        <div className="slider_onboarding">
            <img src={Progression} alt="Progression"/>
            <h2>Progression</h2>
            <br></br>
            <p><b>Choisissez</b> votre niveau de difficulté, <b>surmontez</b> les épreuves et <b>évoluez</b> pour <b>gagner davantage de lots.</b></p>
            <div id="paginationreplace">
              <span className="paginationreplace"></span>
              <span className="paginationreplace pr-mid pr-active"></span>
              <span className="paginationreplace"></span>
            </div>
            <Link to="/niveau" className="next_intro">Passer l'introduction</Link>
        </div>

        <div className="slider_onboarding">
            <img src={Recompense} alt="Recompense" id="SwipeRecompense"/>
            <h2>Récompenses</h2>
            <br></br>
            <p>( On sait que c’est ce qui vous intéresse ). Recevez <b>un pourcentage de réduction</b> en fonction du temps impartis dans <b>nos magasins partenaires !</b></p>
            <div id="paginationreplace">
              <span className="paginationreplace"></span>
              <span className="paginationreplace pr-mid"></span>
              <span className="paginationreplace pr-active"></span>
            </div>
            <Link to="/niveau" className="next_intro">Passer l'introduction</Link>
        </div>

        <div className="slider_onboarding">
            <img src={BotImage} alt="Oursoupidou"/>
            <h2>Oursoupidou</h2>
            <p>Bonjour, <b>je suis Oursoupidou</b> ! Je te <b>conseillerai</b> durant votre parcours ici, si vous avez <b>une question</b> ou <b>besoin d’indices</b>, n’hésitez pas !</p>
            <br></br>
            <div>
            {/* <Link to="/enigme1" className="btn-unfilled">Enigme1</Link> */}
            </div>
            <Link to="/niveau" className="btn-unfilled">Commencer l'aventure</Link>
            <Link to="niveau" className="next_intro">Passer l'introduction</Link>
        </div>      
      </Swiper>
    )
  }
}