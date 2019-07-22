import React, { Component } from 'react'
import {isBrowser} from 'react-device-detect';
import Loader from './Loader';

class DeviceDetect extends Component {

    renderContent = () => {
        if (isBrowser) {
            return <div>Bonjour vous êtes sur navigateur</div>
        }
        return <div><Loader/></div>
    }

    render(){
        return this.renderContent();
    }
}

export default DeviceDetect;