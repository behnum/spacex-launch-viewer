import { useState } from 'react'
import useSpaceXLaunches from '../useSpaceXLaunches'

const App = () => {
  const { launches, loading } = useSpaceXLaunches()
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextButtonClick = () => {
    // TODO: Implement this
  }

  const handleRandomButtonClick = () => {
    // TODO: Implement this
  }

  return (
    <>
      <h1 className='text-3xl font-bold underline'>SpaceX-Launch-Viewer</h1>
    </>
  )
}
export default App
