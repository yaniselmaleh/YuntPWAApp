import React, { Component } from 'react'
import '../sass/components/_isLaptop.scss';
import '../sass/components/_cta.scss';

class IsLaptop extends Component {
    render(){
        return(
            <React.Fragment>
                <article id="article_laptop">
                  <h1>Attention !</h1>
                  <hr/>

                  <p>L'application <b>Yunt</b> s'utilise uniquement sur téléphone. <br/>Nous t'invitons donc à te munir de ton plus beau <b>smartphone afin de profiter pleinement de l'expérience</b> !

                  <br></br>
                  <br></br>

                  Tu peux également retrouver notre site internet sur www.yunt.io
                  </p>  

                  <a href="https://www.yunt.io" title="youtube" className="btn-unfilled">Yunt.io</a>
                </article>
            </React.Fragment>
        )
    }
}

export default IsLaptop