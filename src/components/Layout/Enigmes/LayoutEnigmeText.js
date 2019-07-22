import React, { Component } from 'react'
// import '../sass/components/_cta.scss'

class LayoutEnigmeText extends Component{

    render(props){
        return(
            <React.Fragment>
                <p dangerouslySetInnerHTML={{__html: this.props.name}}></p>
            </React.Fragment>
        )
    }
}

export default LayoutEnigmeText