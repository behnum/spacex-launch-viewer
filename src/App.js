import { useState } from 'react'
import useSpaceXLaunches from './hooks/useSpaceXLaunches'

import './SpaceXLaunches.css'
import Stars from './components/Stars'

const App = () => {
  const { launches, loading } = useSpaceXLaunches()
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextButtonClick = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % launches.length)
  }

  const handleRandomButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * launches.length)
    setCurrentIndex(randomIndex)
  }

  return (
    <>
      <div className='spaceX-container'>
        {loading ? (
          <p id='loading'>Loading...</p>
        ) : launches.length > 0 ? (
          <>
            <div className='button-container'>
              <button className='btn-plain' onClick={handleNextButtonClick}>
                NEXT LAUNCH
              </button>
            </div>
            <div className='launch-container'>
              <img
                src={launches[currentIndex].links.flickr.original[0]}
                alt={`Flickr for ${launches[currentIndex].name}`}
                className='launch-image'
              />
              {launches[currentIndex].name}
              {' ('}
              {new Date(launches[currentIndex].date_utc).toLocaleDateString()}
              {') '}
            </div>
            <div className='button-container'>
              <button className='btn' onClick={handleRandomButtonClick}>
                Random
              </button>
            </div>
          </>
        ) : (
          <p>No launches with images available</p>
        )}
      </div>
      <Stars />
    </>
  )
}
export default App
