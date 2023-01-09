import React from 'react';
import './featured.css';
import { images } from '../../constants';

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img src={images.abuja1} alt="abuja1"/>
            <div className='featuredTitles'>
                <h1>Abuja</h1>
                <h1>123 Properties</h1>
            </div>
        </div>
    </div>
  )
}

export default Featured