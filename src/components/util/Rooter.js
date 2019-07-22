import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Enigme1 from '../enigmes/Enigme1';
import Enigme1Reponse from '../enigmes/Enigme1Reponse'
import Enigme2 from '../enigmes/Enigme2'
import Enigme3 from '../enigmes/Enigme3'
import Enigme3Reponse from '../enigmes/Enigme3Reponse'
import Enigme4 from '../enigmes/Enigme4'
import Enigme4Reponse from '../enigmes/Enigme4Reponse'
import Draw from '../Draw'
import EnigmeEnd from '../enigmes/EnigmeEnd'
import Felicitation from '../enigmes/Felicitation'

import Loader from '../Loader'
import Niveau from '../Niveau'
import Niveau2 from '../Niveau2'
import NiveauError from '../NiveauError'
import NiveauError2 from '../NiveauError2'
import NiveauError3 from '../NiveauError3'
import Slide from '../Slide'
import BrandSection from '../BrandsSection'
import MapBoulanger from '../MapDirection'
import LeVol from '../LeVol.js'
import Ready from '../Ready.js'

// import { AnimatedSwitch } from 'react-router-transition';
// import Rooter from '../../sass/components/_Rooter.scss'
import SuperTest from '../SuperTest';
import Firebase from '../Firebase';
import FirebasePhone from '../FirebasePhone';
import {isMobile} from 'react-device-detect';
import '../../sass/components/_isMobile.scss'


class Rooter extends Component {
    render(){

        if (!isMobile) {
            return <div id="isMobile">
                    <h1>Attention !</h1>
                    <hr></hr>
                    <p>
                        L'application <b>Yunt</b> s'utilise uniquement sur téléphone. 
                        <br></br>
                        Nous t'invitons donc à te munir de ton plus beau <b>smartphone afin de profiter pleinement de l'expérience !</b>

                        <br></br>
                        <br></br>

                        Tu peux également retrouver notre site internet sur https://www.yunt.io/
                        </p>

                        <a href="https://yunt.io" className="btn-unfilled">Visiter le site</a>

                </div>
        }

        const Root = () => (

            <Switch>
                <Route exact path="/" component={Loader} />
                <Route path="/slide" component={Slide} />
                <Route path="/niveau" component={Niveau} />
                <Route path="/niveau2" component={Niveau2} />
                <Route path="/niveauerror" component={NiveauError} />
                <Route path="/niveauerror2" component={NiveauError2} />
                <Route path="/niveauerror3" component={NiveauError3} />
                <Route path="/section" component={BrandSection} />
                <Route path="/introduction" component={LeVol} />
                <Route path="/pret" component={Ready} />

                <Route path="/test" component={SuperTest} />
                <Route path="/login" component={Firebase} />
                <Route path="/test2" component={FirebasePhone} />
                          
                <Route path="/enigme1" component={Enigme1} />
                <Route path="/enigme1-reponse" component={Enigme1Reponse} />
                <Route path="/enigme2" component={Enigme2} />
                <Route path="/enigme3" component={Enigme3} />
                <Route path="/enigme3-reponse" component={Enigme3Reponse} />
                <Route path="/enigme4" component={Enigme4} />
                <Route path="/enigme4-reponse" component={Enigme4Reponse} />
                <Route path="/draw" component={Draw} />
                <Route path="/fin-enigme-boulanger" component={EnigmeEnd} />
                <Route path="/felicitation" component={Felicitation} />

                <Route path="/map" component={MapBoulanger} />
                {/* Pour la 404 <Route component={404} /> */}

            </Switch>
        )

        return(
            <Router>
                <Root/>
            </Router>
        )
    }
}

export default Rooter;