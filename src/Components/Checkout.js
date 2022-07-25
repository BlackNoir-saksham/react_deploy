import React from 'react'
import './Checkout.css'
import Ad from '../elements/ad.png'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'



function Checkout() {
    const[{basket}] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <div>
                <img className='checkout__ad' src={Ad} alt='logo'></img>
                <h3 className='checkout__title'>
                    Your Shopping Basket
                </h3>
                {/*checkout product */}
                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>

        <div className='checkout__right'>
            {/* <h2>The subtotal will go here</h2> */}
            <Subtotal
                total={basket.length}
            />
        </div>
    </div>
  )
}

export default Checkout