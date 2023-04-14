import { useRef, useState } from 'react';
import './App.css'
import LocationInfo from './components/LocationInfo';
import ResidentCard from './components/ResidentCard';
import useFetch from './hooks/useFetch'
import getRandomLocation from './utils/getRandomLocation';

function App() {

  const [inputValue, setInputValue] = useState(getRandomLocation())
  const url = `https://rickandmortyapi.com/api/location/${inputValue}`

  const location = useFetch(url)

  const inputLocation = useRef()
const handleSubmit = event => {
  event.preventDefault()
  //event.target.firstChild.value
  //event.target."id".value
 setInputValue(inputLocation.current.value);
 inputLocation.current.value = ""
}
  return (

    <div className="App">

      <form onSubmit={handleSubmit}>
        <input ref={inputLocation} type="text" />
        <button>Search</button>
      </form>

      <h1>Rick and Morty</h1>
      <LocationInfo location={location} />
      <div>
        {
          location?.residents.map(residentUrl => (
            <ResidentCard
              key={residentUrl}
              url={residentUrl}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
