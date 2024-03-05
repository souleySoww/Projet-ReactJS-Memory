import React from 'react';
import { UNKNOWN_SRC , cardData} from '../data/cardData.js';
import {shuffle} from '../scripts/utils.js';
import CardBoard from './cardBoard.jsx';
import '../assets/style/memory.css';
import InfoZone from './InfoZone.jsx';
import Controls from './controls.jsx';

export default class Memory extends React.Component {
  constructor(props) {
    super(props);
    this.state={returned :null,paires:4,score:0,allCards:[],returned:null,boolean:false,tentatives:0,description:'?',debut:true,fin:false };
    this.showCard=this.showCard.bind(this);
    this.setNullReturned=this.setNullReturned.bind(this);
    this.hideAll=this.hideAll.bind(this);
    this.updatePairs=this.updatePairs.bind(this);
    this.nbrevealedPeers=0

  }
  async componentDidMount(){
    this.setState({allCards:cardData});
    this.createCards();
  }

  showCard(card){

    if(this.state.debut===true && this.state.fin===false){
      if(this.state.boolean===false){
        this.setState({description:card.props.description})
        this.setState({returned:card,boolean:true})
      }
      else{
        this.setState(prevState=>({tentatives:prevState.tentatives+1}));
        if(this.state.returned.props.description==card.props.description){
          this.setState(prevState=>({score:prevState.score+1}));
          this.setNullReturned();
        }
        else {
          window.setTimeout(()=>this.hideAll(card),1000);
          this.nbrevealedPeers++
        }
      }
    }
  }

  setNullReturned(){
    this.setState({returned:null,boolean:false});
  }

  hideAll(card){
    card.hide();
    this.state.returned.hide();
    this.setNullReturned();
  }



  createCards(){

    let carte=cardData.slice(0,this.state.paires);
    let tmp=[...carte];
    carte.push(...tmp);
    carte.forEach( (elm, i,t) => t[i]={...elm,id:i});
    this.setState({allCards:shuffle(carte)});

  }

  updatePairs(event){
    this.setState({paires:parseInt(event.target.value)});

  }


  render() {
    return (
      <div>
          <Controls />
          <CardBoard  allCards={this.state.allCards} showCard={this.showCard} />
          <InfoZone pairs={this.state.paires} last={this.state.description} nbTries={this.tentatives} />
       </div>
    );
  }
}

