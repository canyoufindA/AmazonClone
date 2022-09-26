import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
    const [{ basket, user }, dispatch] =useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout_ad' src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/etsy-banner-design-template-d6ec0e3a8ac8a99ebc78cbadb5a4eeb7_screen.jpg?ts=1590994218' alt='logo'/>
                <div>
                  <h3>
                      Hello, {user?.email}
                  </h3>
                  <h2 className='checkout__title'>Your shopping Basket</h2>
                  
            </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
