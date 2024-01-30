import { useEffect, useState } from 'react'
import axios from 'axios'

const useSpaceXLaunches = () => {
  const [launches, setLaunches] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v5/launches')
        const launchesWithImages = response.data.filter(
          launch => launch.links?.flickr?.original && launch.links.flickr.original.length > 0
        )
        setLaunches(launchesWithImages)
        setLoading(false)
      } catch (error) {
        console.error("❗️ Couldn't fetch launches", error)
        setLoading(false)
      }
    }

    fetchLaunches()
  }, [])

  return { launches, loading }
}
export default useSpaceXLaunches
