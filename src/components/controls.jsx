import React from 'react';
import "../assets/style/controls.css";
import { cardData } from '../data/cardData';

export default class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state={nbPair:"4", play:"Play"};
    this.handleChangeValue =this.handleChangeValue.bind(this);
}

handleChangeValue(event) {
    this.setState({nbPair: event.target.value});
    this.props.pairesChanged(this.state.nbPair);

}

playAndPause() {
    if (this.state.play=="Play") this.setState({play:"Stop"});
    else this.setState({play:"Play"});
}

  render() {
    return (
        <div className="controls">
            <div><label htmlFor="pairs">nb paires : </label>
            <input
                type="number" className="pairs" name="pairs"
                min="0" max={cardData.length}
                onChange = { this.handleChangeValue }
                value = {this.state.nbPair}

            /></div>


            <div><button onClick={() => {
                this.props.startAndStop();
                this.playAndPause();
            }}>
                {this.state.play}
            </button></div>

            <div><span>{this.props.chrono} </span></div>
        </div>
    );
  }
}

