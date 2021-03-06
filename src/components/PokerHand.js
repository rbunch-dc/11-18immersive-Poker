import React from 'react';
import Card from './Card';

// my job is to show cards. I dont care about state.
function PokerHand(props){
    // a pokerHand is made up of... CARDS!
    let hand = props.cards.map((card,i)=>{
        return <Card key={i} card={card} />
    });
    console.log(hand)
    return(
        <div className="col-sm-12">
            {hand}
        </div>
    )
}

export default PokerHand;