import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id,title,image,price,rating}) => {

  const [state,dispatch]=useStateValue();

  const removeFromBasket=()=>{
      dispatch({
        type:'REMOVE_FROM_BASKET',
        id:id,
      })
  }



  return (
    
         <div className="checkoutProduct">
           <img style={{width:'200px'}} src={image} alt="img" className="checkoutProduct__image" />
           <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {Array(rating)
                .fill()
                .map((item,i)=>(
                    <p>⭐</p>
                ))
                }
                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
           </div>
        </div>
    
  )
}

export default CheckoutProduct