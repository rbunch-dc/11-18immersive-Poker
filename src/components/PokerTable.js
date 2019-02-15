import React, { Component } from "react"; 
import Deck from '../utilityClasses/Deck';
import GameButtons from './GameButtons';

class PokerTable extends Component{
    constructor(){
        super();
        this.cards = new Deck();
        this.cards.createDeck();
        this.cards.shuffleDeck();
        console.log(this.cards);
        this.state = {

        }
    }

    

    render(){
        return(
            <div className="col-sm-12 the-table">
                <GameButtons />
            </div>
        )
    }
}

export default PokerTable;




