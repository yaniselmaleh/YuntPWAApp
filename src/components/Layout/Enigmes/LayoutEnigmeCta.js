import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import '../sass/components/_cta.scss'

class LayoutEnigmeCta extends Component{
    
    render(props){
        return(
            <React.Fragment>
                <Link 
                    to={this.props.url} 
                    href={this.props.url}
                    className={`btn-${this.props.className}`}
                    title={this.props.title}
                    target=""
                    dangerouslySetInnerHTML={{__html: this.props.name}}
                >
                </Link>
                {/* <a 
                    href={this.props.url}
                    className={`btn-${this.props.className}`}
                    title={this.props.title}
                    target=""
                    dangerouslySetInnerHTML={{__html: this.props.name}}
                >
                </a> */}
            </React.Fragment>
        )
    }
}

export default LayoutEnigmeCta