import React from 'react'

const CartList = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <h5 className="card-title">{props.item.price}</h5>
    <a onClick={props.btnFunction} href="#" className="btn btn-primary">{props.button}</a>
            </div>
        </div>
    )
}

export default CartList;