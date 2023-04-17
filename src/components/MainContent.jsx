import React from 'react'
import LocationInfo from './LocationInfo'
import ResidentCard from './ResidentCard'
import "./styles/mainContent.css"


const MainContent = ({ location}) => {
  return (
    <>
     <LocationInfo location={location} />
      <div className='resident_container'>
        {
          location?.results[0].residents.map(residentUrl => (
            <ResidentCard
              key={residentUrl}
              url={residentUrl}
            />
          ))
        }
      </div>
    </>
  )
}

export default MainContent