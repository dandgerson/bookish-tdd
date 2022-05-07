import { useEffect, useState } from 'react'
import axios from 'axios'

const useRemoteService = <T>(initialUrl: string, initialData: T) => {
  const [url, setUrl] = useState(initialUrl)
  const [data, setData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const res = await axios.get(url)
        setData(res.data)
      } catch (e) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetch()
  }, [url])

  return { data, isLoading, isError, setUrl }
}

export default useRemoteService
