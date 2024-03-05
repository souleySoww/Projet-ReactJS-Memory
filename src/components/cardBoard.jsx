import React from 'react';
import Card from './card.jsx';
import '../style/style.css';
import '../assets/style/cardBoard.css';



export default class CardBoard extends React.Component {
  constructor(props) {
    super(props);


  }


  render() {
    const list=this.props.allCards.map(elm=><Card description = {elm.description} src={elm.src} key={elm.id} showCard={this.props.showCard}  />)
    return (
      <div className='card'>{list}</div>
    );
  }
}

