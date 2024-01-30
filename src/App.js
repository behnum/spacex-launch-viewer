import { useState } from 'react'
import useSpaceXLaunches from './hooks/useSpaceXLaunches'

const App = () => {
  const { launches, loading } = useSpaceXLaunches()
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextButtonClick = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % launches.length)
  }

  const handleRandomButtonClick = () => {
    // TODO: Implement this
  }

  return (
    <>
      <>
        <div className='spaceX-container'>
          <h1>SpaceX Launches</h1>
          {loading ? (
            <p>Loading...</p>
          ) : launches.length > 0 ? (
            <>
              <p>data arrived...</p>
              {console.log(launches)}
            </>
          ) : (
            <p>No launches with images available!</p>
          )}
        </div>
      </>
    </>
  )
}
export default App
