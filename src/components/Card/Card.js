import React from 'react';
import CartList from '../CartList/CartList';

const Card = (props) => {
    return (
        <div>
            {props.selected.map(item => {
                return <CartList button="Remove" key={item.id} btnFunction={props.removeCard.bind(null, item.id)} item={item}/>
            })}
        </div>
    )
}

export default Card;