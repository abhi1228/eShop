import React from 'react'
import './Product.css';
import {useStateValue} from './StateProvider'
const Product = ({id,title,image,rating,price}) => {

    const [state,dispatch]=useStateValue();

    const addToBasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image: image,
                rating: rating,
                price: price
            },

        })
    }

  return (
    
        <div className="product">
            <div className="product__info">
                <p>{title} </p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                {Array(rating)
                .fill()
                .map((item,i)=>(
                    <p>⭐</p>
                ))
                }
                </div>
            </div>
            <img src={image} alt="product-img" />
            <button onClick={addToBasket}> Add To Basket</button>
        </div>
    
  )
}

export default Product