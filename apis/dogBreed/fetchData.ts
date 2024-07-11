const fetch = require('node-fetch')
import type { RequestInit as NodeFetchRequestInit, Response } from 'node-fetch'

class HTTPResponseError extends Error {
  constructor(public response: Response) {
    super(`HTTP Error Response: ${response.status} ${response.statusText}`);
    this.name = "HTTPResponseError"
  }
}

export const fetchData = async <T>(url: string, options?: NodeFetchRequestInit): Promise<T> => {
  try {
    const response = await fetch(url, options)
    
    if (response.status !== 200 && response.status !== 201) {
      throw new HTTPResponseError(response)
    }
    
    const data = await response.json() as T
    return data
  } catch (error) {
    if (error instanceof HTTPResponseError) {
      console.error(`HTTP Error: ${error.response.status} - ${error.response.statusText}`)
    } else {
      console.error('Error fetching data:', error)
    }
    throw error
  }
}