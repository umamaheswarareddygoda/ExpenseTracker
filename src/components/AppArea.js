import React, { Component } from 'react'
import './BoxStyles.css';
import InvesttTab from './InvesttTab';


class AppArea extends Component {
    render() {
        return (
            <div className="mainBox" id="box1">
                
                <InvesttTab invested="5000" returns="2000"/>
                
            </div>
        )
    }
}

export default AppArea
