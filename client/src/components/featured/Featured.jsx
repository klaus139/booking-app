import React from 'react';
import './featured.css';
import { images } from '../../constants';

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img src={images.lagos1}
            alt="abuja1" className='featuredImg'/>
            <div className='featuredTitles'>
                <h1>Abuja</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img  src={images.abuja1}
            alt="lagos1" 
            className='featuredImg'
            />
            <div className='featuredTitles'>
                <h1>Lagos</h1>
                <h2>553 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src={images.lagos4}
            alt="abuja1"
            className='featuredImg'/>
            <div className='featuredTitles'>
                <h1>Dubai</h1>
                <h2>433 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured