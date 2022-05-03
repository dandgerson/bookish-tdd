import { useEffect, useState } from 'react'
import axios from 'axios'

const useRemoteService = <T>(url: string, initial: T) => {
  const [data, setData] = useState(initial)
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

  return { data, isLoading, isError }
}

export default useRemoteService
