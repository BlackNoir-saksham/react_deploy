import React from 'react'
import Banner from '../elements/banner_final.png'
import Product from './Product.js'
import Iphone from '../elements/iphone.jpg'
import Asus from '../elements/asus.jpg'
import Realme from '../elements/realme.jpg'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <a href='https://www.primevideo.com/?ref_=dvm_pds_amz_in_as_s_g_176' target="_blank" rel="noreferrer">
                <img className='home__image'src={Banner} alt='logo' ></img>
            </a>

            <div className=' home__row' >
                <Product
                id='1'
                title='Iphone'
                price={1200}
                image={Iphone}
                rating={5}/>

                <Product
                id='2'
                title='Asus TUF'
                price={1200}
                image={Asus}
                rating={4}/>

                <Product
                id='3'
                title='Realme Buds'
                price={1200}
                image={Realme}
                rating={5}/>
                <Product
                id='3'
                title='Realme Buds'
                price={1200}
                image={Realme}
                rating={5}/>
                <Product
                id='3'
                title='Realme Buds'
                price={1200}
                image={Realme}
                rating={5}/>
                <Product
                id='3'
                title='Realme Buds'
                price={1200}
                image={Realme}
                rating={5}/>
                <Product
                id='3'
                title='Realme Buds'
                price={1200}
                image={Realme}
                rating={5}/>
                
                
            </div>
            <div className='home__row'>
                <Product
                id='4'
                title='Iphone'
                price={1200}
                image={Iphone}
                rating={5}/>

                <Product
                id='5'
                title='Asus TUF'
                price={1200}
                image={Asus}
                rating={5}/>

                <Product
                id='6'
                title='Realme Buds'
                price={1200}
                image={Realme}
                rating={5}/>
                
                
            </div>
            <div className='home__row'>
                <Product
                id='7'
                title='Iphone'
                price={1200}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                rating={5}/>
{/* 
                <Product
                id='8'
                title='Asus TUF'
                price={1200}
                image={Asus}
                rating={5}/> */}

                
                
                
            </div>
        </div>
        
    </div>
  )
}

export default Home