import React from 'react';
import './searchItem.css';

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=''
        className='siImg'
        />
        <div className='siDesc'>
            <h1 className='siTitle'>Gwagalada Estate Apartments</h1>
            <span className='siDistance'>500m from Central Town</span>
            <span className='siTaxiOp'>Free Airport Taxi</span>
            <span className='siSubtitle'>
                Studio Apartment with Air conditioning and parking
            </span>
            <span className='siFeatures'>
                Entire studio + 1 bedroom + 21m² 1 full bed
            </span>
            <span className='siCancelOp'>Free cancellation</span>
            <span className='siCancelSubtitle'>
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className='siDetails'>details</div>
    </div>
  )
}

export default SearchItem