import React from 'react'
import pin from '../assets/pin-icon.svg'

function Card({item, hr}) {

  return (
    <div className='card'>
      <img className='card-img' src={item.imageUrl} alt="" />
      <div className='card-content'>
        <div className='card-header'>
          <img src={pin} />
          <p className='card-location'>{item.location.toUpperCase()}</p>
          <a className='card-link' href={item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className='card-title'>{item.title}</h1>
        <p className='card-dates'>{item.startDate} - {item.endDate}</p>
        <p className='card-desc'>{item.description}</p>
      </div>
    </div>
  )
}

export default Card