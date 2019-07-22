import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Track = styled.div`
    width: 90%;
    margin: auto;
    height: 5px!important;
    background-image: linear-gradient(to right, rgba(231,107,97, .3), rgba(220,103,149, .3));
    border-radius: 1.4px;
    box-shadow: inset 0 0 5px white;
`;


const Thumb = styled.div`
    width: ${props => props.percentage}%;
    height: 5px!important;
    background-color: #dc6795;
    border-radius: 1.5px;
    opacity: .2%;
    transition: width 0.3s ease-in-out;
`

export default class ProgressBar extends React.Component {

    clamp = (min, value, max) => {
        return Math.min(Math.max(min, value), max);
    }
    render(){
        return(
            <div>
                <Track>
                    <Thumb percentage={this.clamp(0, this.props.percentage, 100)}/>
                </Track>
            </div>

        )
    }
}

ProgressBar.propTypes = {
    percentage: PropTypes.number,
};