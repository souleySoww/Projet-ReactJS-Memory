import React from 'react';

import "../assets/style/infoZone.css";

export default class InfoZone extends React.Component{
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className='infoZone'>
                <div className='remaining'>encore  {this.props.paires} paires</div>
                <div className='last'> Inconnu </div>
                <div className='flips'>{this.props.tentative} essais</div>
            </div>
        );
    }

}
