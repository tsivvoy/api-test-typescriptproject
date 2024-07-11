import dotenv from 'dotenv'
import { RequestInit as NodeFetchRequestInit } from 'node-fetch'

dotenv.config()
export class Config {
  static BASE_URL = 'https://api.thedogapi.com/v1'
  static API_KEY = process.env.API_KEY ?? ''
  
  static getHeaders(): NodeFetchRequestInit['headers'] {
    return {
      'Content-Type': 'application/json',
      'x-api-key': Config.API_KEY,
    }
  }
}