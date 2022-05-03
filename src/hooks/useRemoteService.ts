import { useEffect, useState } from 'react'
import axios from 'axios'

const useRemoteService = (initial: any) => {
  const [data, setData] = useState(initial)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchBooks = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const res = await axios.get('http://localhost:8080/books')
        setData(res.data)
      } catch (e) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBooks()
  }, [])

  return { data, isLoading, isError }
}

export default useRemoteService
