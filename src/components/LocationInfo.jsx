import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <div>
        <h2>{location?.name}</h2>
        <ul>
            <li>Type: <span>{location?.type}</span></li>
            <li>Dimension: <span>{location?.dimension}</span></li>
            <li>Population: <span>{location?.residents.length}</span></li>
        </ul>
    </div>
  )
}

export default LocationInfo