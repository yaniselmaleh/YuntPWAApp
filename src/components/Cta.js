import React, { Component } from 'react'
// import '../sass/components/_cta.scss'

class Cta extends Component{

    render(props){
        return(
            <React.Fragment>
                <a 
                    href={this.props.url}
                    className={`btn-${this.props.className}`}
                    title={this.props.title}
                    target=""
                    dangerouslySetInnerHTML={{__html: this.props.name}}
                >
                </a>
            </React.Fragment>
        )
    }
}

export default Cta