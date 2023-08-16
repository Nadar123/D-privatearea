import React, { useState } from 'react'
import axios from 'axios'
import { useAppSelector } from '../redux.hooks'

function usePostChatMessage(url: any) {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)
  const token = useAppSelector((state) => state.user.user?.info.token)

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const post = async (postData: any) => {
    setLoading(true)
    try {
      const response = await axios.post(url, postData, config)
      setData(response.data)
      setError(null)
    } catch (error) {
      setError(error)
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  return [data, loading, error, post]
}

export default usePostChatMessage
