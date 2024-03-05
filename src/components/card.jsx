import React from 'react';
import {UNKNOWN_SRC} from '../data/cardData.js'
import '../style/style.css';
import '../assets/style/card.css';


/*
 define root component
*/
export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state={src:UNKNOWN_SRC,hidden:true};
    this.show=this.show.bind(this);
    this.hide=this.hide.bind(this);


  }

  show(){
    if(this.state.hidden){
    this.setState({hidden:false,src:this.props.src})
    this.props.showCard(this);
    }
  }

  hide(){
    this.setState({hidden:true,src:UNKNOWN_SRC});
  }

  render() {
    return (
      <img onClick={this.show} src = {this.state.src}></img>
    );
  }
}
