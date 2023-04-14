import React from 'react'
import useFetch from '../hooks/useFetch'

const ResidentCard = ({url}) => {

   const resident = useFetch(url)
console.log(resident)

  return (
    <article>
<header>
   <img src= {resident?.image} alt="" />
   <div className='circle'>
<span>{resident?.status}</span>
   </div>
</header>
<section>
    <h3>{resident?.name}</h3>
    <hr />
    <ul>
        <li>Specie:<span>{resident?.species}</span></li>
        <li>Origin:<span>{resident?.origin.name}</span></li>
        <li>Eppisodes where appear: <span>{resident?.episode.length}</span></li>
    </ul>
</section>
    </article>
  )
}

export default ResidentCard