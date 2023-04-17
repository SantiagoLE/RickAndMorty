import { useRef, useState, useEffect } from 'react';
import './App.css'
import LocationInfo from './components/LocationInfo';
import ResidentCard from './components/ResidentCard';
import useFetch from './hooks/useFetch'
import getRandomLocation from './utils/getRandomLocation';
import axios from 'axios';
import FormAutocomplete from './components/FormAutocomplete';
import MainContent from './components/MainContent';



let _allLocations = ["Monster", "Trunk World", "Earth (C-137)"]

console.log({ _allLocations: _allLocations });

function App() {



  const [inputValue, setInputValue] = useState(_allLocations)
  const [pageUrlLocations, setPageUrlLocations] = useState(1)
  const [locationSelectInList, setLocationSelectInList] = useState(getRandomLocation(_allLocations))

  console.log(locationSelectInList);


  useEffect(() => {

    const urlLocations = `https://rickandmortyapi.com/api/location?page=${pageUrlLocations}`
    axios.get(urlLocations)

      .then(res => {
        res.data.results.forEach(ele => _allLocations.push(ele.name))
        if (pageUrlLocations < 7) {
          setPageUrlLocations(pageUrlLocations + 1)
        }
      })
      .catch(err => console.log(err))

  }, [pageUrlLocations])




  const url = `https://rickandmortyapi.com/api/location/?name=${locationSelectInList}`
  const [location, error] = useFetch(url)









  const locationSelect = (_location) => {
    setLocationSelectInList(_location)
    console.log(_location);
  }
  return (

    <div className="App">
      <div className='app_title' >

      </div>

      <FormAutocomplete
        _allLocations={_allLocations}
        locationSelect={locationSelect}
      />
      {
        error
          ? <h2 className='app_error'>✖️ The location input don't exist 🤔</h2>
          : <MainContent
            location={location}
            locationSelectInList={locationSelectInList}
          />
      }

    </div>
  )
}

export default App
