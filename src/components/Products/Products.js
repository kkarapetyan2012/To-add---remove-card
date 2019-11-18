import React, { useState , useEffect } from 'react';
import CartList from '../CartList/CartList';

const Products = (props) => {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/item')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])


    return (
        <div>
            {data.map((item) => {
                return (
                    // <div key={item.id} className="card">
                    //     <div className="card-body">
                    //         <h5 className="card-title">{item.name}</h5>
                    //         <h5 className="card-title">{item.price}</h5>
                    //         <a href="#" className="btn btn-primary">Add to cart</a>
                    //     </div>
                    // </div>

                    <CartList button="Add to Cart" btnFunction={props.addCard.bind(null, item)} key={item.id} item={item}/>
                    
                )
            })}
        </div>
    )
}

export default Products;