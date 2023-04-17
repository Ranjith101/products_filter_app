import React from 'react'
import './listItem.css';

const ListItem = ({item:{coverSrc,title,price,deliveryFee,serviceTime,rating}}) => 
   (
        <div className="listItem-wrap">
            <img src={coverSrc} alt="" />
            <header>
                <h4>{title}</h4>
                <span>🌟{rating}</span>
            </header>
            <footer>
                <p><b>{serviceTime}</b> <span>DeliveryFee: ${deliveryFee}</span></p>
                <p><b>Price: ${price}</b></p>
            </footer>
        </div>
  )


export default ListItem