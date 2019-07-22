import React, { Component } from 'react'

class SlideLayout extends Component {
    render(props){
        return(
            <div>
                <img src={this.props.image} alt={this.props.title}/>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default SlideLayout