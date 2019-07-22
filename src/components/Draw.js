import React, { Component } from 'react'
import CanvasDraw from "react-canvas-draw";
import { Link } from "react-router-dom";

import Oursoupidou from "../img/oursoupidou.gif";
import '../sass/components/_cta.scss';
import '../sass/components/_draw.scss';

class Draw extends Component {

    render(){
        return(
            <section id="introduction">
                <aside>
                    <img src={Oursoupidou} alt="Chelavier" id="imgDraw" />
                </aside>
                <article id="draw">
                    <CanvasDraw style={{
                        boxShadow:"0 13px 27px -5px rgba(50, 50, 93, 0.25),0 8px 16px -8px rgba(0, 0, 0, 0.3)"   
                    }}/>
                    <br/>
                    <Link to="/enigme2" className="btn-unfilled" id="inputdraw">Valider le dessins</Link>
                </article>
            </section>
        )
    }
}

export default Draw